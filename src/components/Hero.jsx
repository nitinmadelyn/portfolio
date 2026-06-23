import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiGithub, SiUpwork } from 'react-icons/si';
import { FiLinkedin } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const canvasRef      = useRef(null);
  const containerRef   = useRef(null);
  const [loaded, setLoaded]                   = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Direct-DOM refs — updated inside render() without setState so React
  // never re-renders on every GSAP frame (eliminates ~150 ms forced reflow).
  const nameWrapperRef   = useRef(null);
  const roleWrapperRef   = useRef(null);
  const statusWrapperRef = useRef(null);
  const descWrapperRef   = useRef(null);
  const ctaWrapperRef    = useRef(null);

  const frameCount = 238;
  const currentFrame = (index) =>
    `/images/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

  const imagesRef          = useRef([]);
  const seqRef             = useRef({ frame: 0 });
  const firstFrameShownRef = useRef(false);

  // ─── Preload — show canvas/UI as soon as frame 0 is ready ───────────────
  useEffect(() => {
    let loadedCount = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);

      const onSettled = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
        if (i === 0 && !firstFrameShownRef.current) {
          firstFrameShownRef.current = true;
          setLoaded(true);
        }
        if (loadedCount === frameCount) setLoaded(true);
      };

      img.onload  = onSettled;
      img.onerror = onSettled;
      imagesRef.current.push(img);
    }
  }, []);

  // ─── Canvas + GSAP — starts once frame 0 is ready ───────────────────────
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Direct DOM style helper — sets opacity + translateY without React render
    const setFrameVisibility = (ref, visible, translateY = 30) => {
      if (!ref.current) return;
      ref.current.style.opacity   = visible ? '1' : '0';
      ref.current.style.transform = visible ? 'translateY(0px)' : `translateY(${translateY}px)`;
    };

    const render = () => {
      if (!canvasRef.current || !imagesRef.current.length) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let fi = Math.round(seqRef.current.frame);
      if (fi >= frameCount) fi = frameCount - 1;

      const img = imagesRef.current[fi];
      if (img && img.complete && img.naturalHeight !== 0) {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }

      // Drive text visibility directly on DOM — zero React re-renders
      setFrameVisibility(nameWrapperRef,   fi >= 60);
      setFrameVisibility(roleWrapperRef,   fi >= 80);
      setFrameVisibility(statusWrapperRef, fi >= 80,  20);
      setFrameVisibility(descWrapperRef,   fi >= 120);
      setFrameVisibility(ctaWrapperRef,    fi >= 160);
    };

    const getViewportHeight = () =>
      window.visualViewport ? window.visualViewport.height : window.innerHeight;

    const resizeCanvas = () => {
      canvas.width  = window.innerWidth;
      canvas.height = getViewportHeight();
      render();
    };

    window.addEventListener('resize', resizeCanvas);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', resizeCanvas);
    }
    resizeCanvas();

    // ── Boot animation ────────────────────────────────────────────────────
    // HUD elements and social icons are CSS-animated independently
    // so only canvas/bg effects run here.
    const bootTl = gsap.timeline({ delay: 0.3 });

    bootTl.fromTo('.noise-overlay',
      { opacity: 0 },
      { opacity: 0.15, duration: 1, ease: 'none' },
      0);

    bootTl.fromTo('.center-glow',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power1.inOut' },
      0.2);

    bootTl.fromTo('nav',
      { y: -50, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' },
      0.3);

    bootTl.fromTo(canvas,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
      0.5);

    bootTl.to(seqRef.current,
      { frame: 10, snap: 'frame', duration: 1.2, ease: 'power1.inOut', onUpdate: render },
      0.5);

    // ── Scroll continuation ───────────────────────────────────────────────
    const tlScroll = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=4000',
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    tlScroll.to(seqRef.current, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      duration: 1,
      onUpdate: render,
    });

    tlScroll.fromTo('.portfolio-ui',
      { opacity: 1, filter: 'blur(0px)' },
      { opacity: 0, filter: 'blur(5px)', duration: 0.1, ease: 'none' },
      0.9);

    tlScroll.fromTo(canvas,
      { opacity: 1, filter: 'blur(0px)' },
      { opacity: 0, filter: 'blur(10px)', duration: 0.1, ease: 'none' },
      0.9);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', resizeCanvas);
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loaded]);

  const titleText = 'NITIN';

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100dvh] bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide"
    >
      {/* Loading State */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#020202]">
          <div className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            &gt; INITIALIZING_CORE_SYSTEM
          </div>
          <div className="w-64 h-[1px] bg-white/10 overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Background — grid */}
      <div
        className="portfolio-ui absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Static noise grain */}
      <div
        className="portfolio-ui noise-overlay absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Center glow */}
      <div className="portfolio-ui center-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-0 mix-blend-screen z-[1]" />

      {/* ── HUD ELEMENTS — CSS-animated so LCP text is visible at ~1.3 s,
           not gated behind canvas frame loading.
           They still belong to .portfolio-ui so the scroll fadeout works. ── */}
      <div
        className="portfolio-ui absolute top-28 left-8 md:top-32 md:left-12 z-[60] font-mono text-[10px] text-blue-600 tracking-widest flex flex-col space-y-1.5 pointer-events-none"
        aria-hidden="true"
      >
        <span style={{ opacity: 0, animation: 'hudFadeIn 0.15s ease 1.0s forwards' }}>
          &gt; AVAILABLE FOR NEW PROJECTS
        </span>
        <span style={{ opacity: 0, animation: 'hudFadeIn 0.15s ease 1.15s forwards' }}>
          &gt; 15+ YRS EXPERIENCE
        </span>
        <span style={{ opacity: 0, animation: 'hudFadeIn 0.15s ease 1.3s forwards' }}>
          &gt; REMOTE WORLDWIDE
        </span>
      </div>

      <div
        className="portfolio-ui absolute bottom-12 right-8 md:bottom-12 md:right-12 z-[60] font-mono text-[10px] text-gray-600 tracking-widest text-right flex-col space-y-1.5 pointer-events-none hidden md:flex"
        aria-hidden="true"
      >
        <span style={{ opacity: 0, animation: 'hudFadeIn 0.15s ease 1.2s forwards' }}>
          STACK: REACT · NODE · AWS
        </span>
        {/* This is the Lighthouse LCP candidate — visible at 1.35 s via CSS */}
        <span style={{ opacity: 0, animation: 'hudFadeIn 0.15s ease 1.35s forwards' }}>
          UPWORK: 100% SUCCESS · 81+ JOBS
        </span>
      </div>

      {/* ── SOCIAL LINKS — CSS-animated ── */}
      <div className="portfolio-ui absolute bottom-12 left-8 md:left-12 z-[60] flex flex-col space-y-5">
        <a
          href="https://github.com/nitinmadelyn"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
          style={{ opacity: 0, animation: 'socialSlideIn 0.2s ease 1.5s forwards' }}
        >
          <SiGithub className="w-[18px] h-[18px]" aria-hidden="true" role="presentation" focusable="false" />
        </a>
        <a
          href="https://www.linkedin.com/in/nitinmuchhadiya"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
          style={{ opacity: 0, animation: 'socialSlideIn 0.2s ease 1.65s forwards' }}
        >
          <FiLinkedin className="w-[18px] h-[18px]" aria-hidden="true" role="presentation" focusable="false" />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~019197dea2650064ed?viewMode=1"
          target="_blank"
          rel="noreferrer"
          aria-label="Upwork profile"
          className="text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
          style={{ opacity: 0, animation: 'socialSlideIn 0.2s ease 1.8s forwards' }}
        >
          <SiUpwork className="w-[18px] h-[18px]" aria-hidden="true" role="presentation" focusable="false" />
        </a>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-0 scale-95"
      />

      {/* ── TEXT OVERLAY — always in DOM; opacity/transform driven via render()
           refs so React never re-renders during scroll animation. ── */}
      <div
        className="portfolio-ui absolute inset-0 z-[50] pointer-events-none flex flex-col md:flex-row justify-between items-end md:items-center px-6 md:px-[15%] lg:px-[18%] pt-0 pb-16 md:pt-0 md:pb-0"
      >
        {/* LEFT: Name + Role + Status */}
        <div className="w-full md:w-[35%] flex flex-col items-start text-left">

          <div
            ref={nameWrapperRef}
            className="mb-3"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-[0.1em] uppercase leading-none"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.2)' }}
            >
              {titleText}
            </h1>
          </div>

          <div
            ref={roleWrapperRef}
            className="relative inline-block mb-3"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}
          >
            <h2 className="text-xs sm:text-sm md:text-md lg:text-lg font-mono text-gray-300 tracking-[0.2em] uppercase pb-2">
              Full Stack Engineer
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/60" />
          </div>

          <div
            ref={statusWrapperRef}
            className="flex items-center gap-2"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
            <span className="text-[10px] font-mono text-blue-600 tracking-[0.3em] uppercase">
              15+ Yrs Experience
            </span>
          </div>
        </div>

        {/* RIGHT: Description + CTA */}
        <div className="w-full md:w-[35%] flex flex-col items-start text-left mt-4 md:mt-0 md:pl-8">

          <div
            ref={descWrapperRef}
            className="mb-5"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
          >
            <p className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-base font-light tracking-wide leading-relaxed">
              Crafting modern, scalable and high-performance web &amp; mobile applications with
              precision engineering and seamless user experience.
            </p>
          </div>

          <div
            ref={ctaWrapperRef}
            className="pointer-events-auto"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 border border-gray-700 bg-black/50 hover:bg-black/80 hover:border-blue-500/50 transition-colors cursor-pointer rounded-sm backdrop-blur-md group"
            >
              <span className="text-gray-300 font-mono tracking-widest uppercase text-xs group-hover:text-white transition-colors">
                Explore Work
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
