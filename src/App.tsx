/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  LayoutGrid, 
  Zap, 
  Layers, 
  MessageCircle, 
  Palette, 
  Book, 
  Settings as SettingsIcon,
  ChevronRight,
  Download,
  Copy,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Loader2,
  X,
  Menu,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTENT_DATA } from './data/content';
import { FORMAT_RULES } from './data/formats';
import { imagenService } from './services/imagenService';
import { assembleImagenPrompt } from './utils/promptBuilder';

// --- Components ---

const Sidebar = ({ activePanel, setActivePanel, isOpen, setIsOpen }: { activePanel: string, setActivePanel: (p: string) => void, isOpen: boolean, setIsOpen: (o: boolean) => void }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'mwf', label: 'MWF Tips', icon: Zap },
    { id: 'carousel', label: 'Carousels', icon: Layers },
    { id: 'qa', label: 'Q&As', icon: MessageCircle },
    { id: 'studio', label: 'Format Studio', icon: Palette },
    { id: 'prompts', label: 'Prompt Library', icon: Book },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      <div className={`w-[260px] fixed left-0 top-0 h-full bg-shine-black border-r border-white/5 flex flex-col z-[70] transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Shine Suite Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden text-shine-gold items-center justify-center">
                <Sun size={24} />
              </div>
            </div>
            <span className="font-sans font-extrabold text-shine-gold tracking-wider text-lg">SHINE SUITE</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-shine-gray hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePanel(item.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activePanel === item.id 
                  ? 'bg-shine-gold text-shine-black font-bold' 
                  : 'text-shine-gray hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <div className="flex items-center gap-3 text-xs text-shine-gray">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <span>System Ready</span>
          </div>
        </div>
      </div>
    </>
  );
};

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <header className="h-16 border-b border-white/5 flex items-center justify-between px-4 lg:px-8 bg-[#0F0E0D]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-2 text-shine-gold hover:bg-white/5 rounded-lg">
          <Menu size={24} />
        </button>
        <span className="text-shine-gray text-xs lg:text-sm font-medium hidden sm:inline">Campaign: <span className="text-white">50 Tips 2026</span></span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-shine-black/50 px-3 py-1.5 rounded-full border border-white/5">
          <div className="w-2 h-2 rounded-full bg-shine-gold"></div>
          <span className="text-[10px] lg:text-xs font-mono text-shine-gold uppercase tracking-tighter">gemini-3.1-flash-image</span>
        </div>
      </div>
    </header>
  );
};

// --- Panels ---

const Dashboard = ({ onNavigate }: { onNavigate: (p: string) => void }) => {
  const stats = [
    { label: 'MWF Tips', current: 5, total: 50, color: 'bg-shine-gold', panel: 'mwf' },
    { label: 'Tuesday Carousels', current: 1, total: 16, color: 'bg-shine-blue', panel: 'carousel' },
    { label: 'Thursday Q&As', current: 1, total: 16, color: 'bg-shine-red', panel: 'qa' },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="shine-card p-6 cursor-pointer group" onClick={() => onNavigate(stat.panel)}>
            <div className="flex justify-between items-end mb-4">
              <span className="text-shine-gray font-medium text-sm">{stat.label}</span>
              <span className="text-xl lg:text-2xl font-bold">{Math.round((stat.current / stat.total) * 100)}%</span>
            </div>
            <div className="h-2 bg-shine-black rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(stat.current / stat.total) * 100}%` }}
                className={`h-full ${stat.color}`}
              />
            </div>
            <div className="mt-4 text-[10px] text-shine-gray flex justify-between uppercase tracking-widest">
              <span>{stat.current} generated</span>
              <span>{stat.total} total</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="shine-card p-6 lg:p-8 border-shine-gold/20 bg-gradient-to-br from-shine-dark to-shine-black relative overflow-hidden h-full">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-shine-gold/10 text-shine-gold px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Today's Schedule</span>
                <span className="text-shine-gray text-xs">March 17, 2026</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">What Is an IEP? Everything Parents Need to Know</h2>
              <p className="text-shine-gray text-sm mb-6 max-w-lg">Tuesday Educational Carousel #1. Target Persona: Rebecca / Hope. SEO: what is an iep, individualized education program.</p>
              <button 
                onClick={() => onNavigate('carousel')}
                className="shine-btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Generate Visuals <ChevronRight size={18} />
              </button>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 text-shine-gold hidden sm:block">
              <Layers size={240} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4 lg:space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <button onClick={() => onNavigate('prompts')} className="shine-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors text-left">
              <div className="w-10 h-10 rounded-lg bg-shine-gold/10 flex items-center justify-center text-shine-gold shrink-0">
                <Book size={20} />
              </div>
              <div>
                <div className="font-bold text-sm lg:text-base">Prompt Library</div>
                <div className="text-[10px] lg:text-xs text-shine-gray">9 pre-built AI prompt sets</div>
              </div>
            </button>
            <button onClick={() => onNavigate('studio')} className="shine-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors text-left">
              <div className="w-10 h-10 rounded-lg bg-shine-gold/10 flex items-center justify-center text-shine-gold shrink-0">
                <Palette size={20} />
              </div>
              <div>
                <div className="font-bold text-sm lg:text-base">Format Studio</div>
                <div className="text-[10px] lg:text-xs text-shine-gray">11 visual brand formats</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MWFGenerator = ({ onPreview }: { onPreview: (url: string) => void }) => {
  const [selectedTip, setSelectedTip] = useState(CONTENT_DATA.tips[0]);
  const [selectedFormat, setSelectedFormat] = useState('2.1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    const p = assembleImagenPrompt(
      { headline: selectedTip.tip_text, body: selectedTip.hook },
      selectedFormat
    );
    setPrompt(p);
  }, [selectedTip, selectedFormat]);

  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const img = await imagenService.generateImage(prompt);
      setGeneratedImage(img);
    } catch (e: any) {
      alert(e.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const date = new Date().toISOString().split('T')[0];
      downloadImage(generatedImage, `shine_tip_${selectedTip.global_number}_${date}.png`);
    }
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 h-full">
      <div className="w-full lg:col-span-4 space-y-6 overflow-y-auto pr-2 max-h-[40vh] lg:max-h-[calc(100vh-180px)]">
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-shine-gray uppercase tracking-widest">Select Tip</h3>
          <div className="space-y-2">
            {CONTENT_DATA.tips.map((tip) => (
              <button
                key={tip.id}
                onClick={() => setSelectedTip(tip)}
                className={`w-full p-4 rounded-xl text-left transition-all border ${
                  selectedTip.id === tip.id 
                    ? 'bg-shine-gold/10 border-shine-gold' 
                    : 'bg-shine-dark border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold text-shine-gold uppercase tracking-tighter">Tip {tip.global_number}</span>
                  <span className="text-[10px] text-shine-gray">{tip.day_of_week}</span>
                </div>
                <div className="font-bold text-sm line-clamp-1">{tip.tip_text.replace(/—/g, '.')}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-shine-gray uppercase tracking-widest">Visual Format</h3>
          <div className="grid grid-cols-3 gap-2">
            {Object.values(FORMAT_RULES).slice(0, 6).map((format) => (
              <button
                key={format.id}
                onClick={() => setSelectedFormat(format.id)}
                className={`p-3 rounded-lg border text-center transition-all ${
                  selectedFormat === format.id 
                    ? 'border-shine-gold bg-shine-gold/10' 
                    : 'border-white/5 bg-shine-black hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-bold text-shine-gold mb-1">{format.id}</div>
                <div className="text-[8px] uppercase tracking-tighter line-clamp-1">{format.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:col-span-8 space-y-6">
        <div className="shine-card p-1 overflow-hidden aspect-square max-w-[500px] mx-auto relative group">
          {isGenerating ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-shine-black/80 z-10">
              <Loader2 className="animate-spin text-shine-gold mb-4" size={48} />
              <div className="text-shine-gold font-bold animate-pulse">Assembling prompt...</div>
              <div className="text-shine-gray text-xs mt-2">Calling Imagen 3.0</div>
            </div>
          ) : null}

          {generatedImage ? (
            <img 
              src={generatedImage} 
              className="w-full h-full object-cover rounded-lg cursor-zoom-in" 
              alt="Generated" 
              onClick={() => onPreview(generatedImage)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-shine-gold/20 rounded-lg bg-shine-black/30">
              <div className="w-16 h-16 text-shine-gold/20 mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </div>
              <span className="text-shine-gold/40 font-bold uppercase tracking-widest text-center px-4">Ready to generate</span>
            </div>
          )}

          {generatedImage && !isGenerating && (
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
              <button onClick={handleDownload} className="p-2 bg-shine-black/80 rounded-full text-white hover:text-shine-gold border border-white/10">
                <Download size={20} />
              </button>
              <button onClick={handleGenerate} className="p-2 bg-shine-black/80 rounded-full text-white hover:text-shine-gold border border-white/10">
                <RefreshCw size={20} />
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4">
           <div className="flex justify-between items-end">
             <h3 className="text-sm font-bold text-shine-gray uppercase tracking-widest">Imagen Prompt</h3>
             <button onClick={() => { navigator.clipboard.writeText(prompt); }} className="text-xs text-shine-gold flex items-center gap-1 hover:underline">
               <Copy size={12} /> Copy Prompt
             </button>
           </div>
           <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-24 bg-shine-black border border-white/10 rounded-xl p-4 font-mono text-xs text-shine-gold focus:border-shine-gold outline-none resize-none"
           />
           <button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full shine-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
           >
            {isGenerating ? 'GENERATING...' : 'GENERATE VISUAL'}
           </button>
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('shine_api_key') || '');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    imagenService.setApiKey(apiKey);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-extrabold">Settings</h2>
        <p className="text-shine-gray">Configure your API credentials and brand defaults.</p>
      </div>

      <div className="shine-card p-8 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-shine-gray uppercase tracking-widest">Gemini API Key</label>
          <input 
            type="password" 
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your API key..."
            className="w-full bg-shine-black border border-white/10 rounded-xl p-4 font-mono text-shine-gold focus:border-shine-gold outline-none"
          />
          <p className="text-[10px] text-shine-gray italic">Your key is stored locally in your browser and never sent to our servers.</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-shine-gray uppercase tracking-widest">Image Model</label>
          <select className="w-full bg-shine-black border border-white/10 rounded-xl p-4 text-white focus:border-shine-gold outline-none appearance-none">
            <option>gemini-3.1-flash-image-preview</option>
            <option>gemini-2.5-flash-image</option>
          </select>
        </div>

        <button 
          onClick={handleSave}
          className="shine-btn-primary w-full flex items-center justify-center gap-2"
        >
          {saved ? <><CheckCircle2 size={20} /> SAVED</> : 'SAVE CONFIGURATION'}
        </button>
      </div>

      <div className="shine-card p-8">
        <h3 className="font-bold mb-4">Brand Tokens</h3>
        <div className="grid grid-cols-2 gap-4">
          {['#010101', '#CFA012', '#D8CF93', '#C8CC7A', '#F5F0E8', '#7B7B7B'].map((color) => (
            <div key={color} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-white/10" style={{ backgroundColor: color }}></div>
              <span className="font-mono text-xs uppercase">{color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CarouselBuilder = ({ onPreview }: { onPreview: (url: string) => void }) => {
  const [selectedCarousel, setSelectedCarousel] = useState(CONTENT_DATA.carousels[0]);
  const [generatingSlide, setGeneratingSlide] = useState<number | null>(null);
  const [completedSlides, setCompletedSlides] = useState<Record<number, string>>({});

  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGenerateSlide = async (slide: any) => {
    setGeneratingSlide(slide.number);
    try {
      const prompt = assembleImagenPrompt(
        { headline: slide.headline, body: slide.body },
        slide.format
      );
      const img = await imagenService.generateImage(prompt);
      setCompletedSlides(prev => ({ ...prev, [slide.number]: img }));
    } catch (e: any) {
      alert(e.message);
    } finally {
      setGeneratingSlide(null);
    }
  };

  const handleDownloadSlide = (slideNumber: number) => {
    const img = completedSlides[slideNumber];
    if (img) {
      const date = new Date().toISOString().split('T')[0];
      downloadImage(img, `shine_carousel_${selectedCarousel.id}_${date}_slide${slideNumber}.png`);
    }
  };

  const handleGenerateAll = async () => {
    for (const slide of selectedCarousel.slides) {
      if (!completedSlides[slide.number]) {
        await handleGenerateSlide(slide);
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-xl lg:text-2xl font-extrabold mb-2">{selectedCarousel.title.replace(/—/g, '.')}</h2>
          <p className="text-shine-gray text-[10px] lg:text-sm uppercase tracking-widest">Scheduled: {selectedCarousel.scheduled_date} • Persona: {selectedCarousel.persona}</p>
        </div>
        <button onClick={handleGenerateAll} className="shine-btn-primary w-full sm:w-auto">GENERATE ALL 7 SLIDES</button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-6 snap-x">
        {selectedCarousel.slides.map((slide) => (
          <div key={slide.number} className="space-y-3 min-w-[200px] lg:min-w-[160px] snap-start">
            <div className="shine-card aspect-square relative overflow-hidden group">
              {generatingSlide === slide.number ? (
                <div className="absolute inset-0 bg-shine-black/80 flex flex-col items-center justify-center">
                  <Loader2 className="animate-spin text-shine-gold mb-2" size={24} />
                  <span className="text-[10px] text-shine-gold font-bold uppercase">Rendering...</span>
                </div>
              ) : completedSlides[slide.number] ? (
                <img 
                  src={completedSlides[slide.number]} 
                  className="w-full h-full object-cover cursor-zoom-in" 
                  alt={`Slide ${slide.number}`} 
                  onClick={() => onPreview(completedSlides[slide.number])}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-shine-black/30 border border-dashed border-white/10 rounded-lg">
                  <span className="text-2xl font-bold text-white/10">{slide.number}</span>
                </div>
              )}
              
              {completedSlides[slide.number] && !generatingSlide && (
                <div className="absolute bottom-2 right-2 flex gap-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <button onClick={() => handleDownloadSlide(slide.number)} className="p-1.5 bg-shine-black/80 rounded-full text-white hover:text-shine-gold border border-white/10">
                    <Download size={14} />
                  </button>
                  <button onClick={() => handleGenerateSlide(slide)} className="p-1.5 bg-shine-black/80 rounded-full text-white hover:text-shine-gold border border-white/10">
                    <RefreshCw size={14} />
                  </button>
                </div>
              )}

              {!generatingSlide && !completedSlides[slide.number] && (
                <button 
                  onClick={() => handleGenerateSlide(slide)}
                  className="absolute inset-0 bg-shine-gold/0 hover:bg-shine-gold/20 flex items-center justify-center opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-all"
                >
                  <RefreshCw size={24} className="text-white" />
                </button>
              )}
            </div>
            <div className="px-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-shine-gray uppercase">Slide {slide.number}</span>
                <span className="text-[8px] bg-white/5 px-1.5 py-0.5 rounded text-shine-gold border border-white/5">{slide.format}</span>
              </div>
              <div className="text-[10px] font-medium line-clamp-2 text-white/70 leading-tight">{slide.headline.replace(/—/g, '.')}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="shine-card p-6 bg-shine-black/40">
        <h3 className="text-sm font-bold text-shine-gray uppercase tracking-widest mb-4">Carousel Metadata</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div>
            <div className="text-[10px] text-shine-gray uppercase mb-1">SEO Query</div>
            <div className="text-sm font-bold text-shine-gold">{selectedCarousel.seo_query}</div>
          </div>
          <div>
            <div className="text-[10px] text-shine-gray uppercase mb-1">Keywords</div>
            <div className="flex flex-wrap gap-2">
              {selectedCarousel.seo_keywords.map(k => (
                <span key={k} className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/5">{k}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-shine-gray uppercase mb-1">CTA Resource</div>
            <div className="text-sm font-bold">{CONTENT_DATA.resources[selectedCarousel.cta_resource as keyof typeof CONTENT_DATA.resources]?.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QABuilder = ({ onPreview }: { onPreview: (url: string) => void }) => {
  const [selectedQA, setSelectedQA] = useState(CONTENT_DATA.qas[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const prompt = assembleImagenPrompt(
        { headline: selectedQA.question, body: selectedQA.opening },
        selectedQA.recommended_format
      );
      const img = await imagenService.generateImage(prompt);
      setGeneratedImage(img);
    } catch (e: any) {
      alert(e.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const date = new Date().toISOString().split('T')[0];
      downloadImage(generatedImage, `shine_qa_${selectedQA.id}_${date}.png`);
    }
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
      <div className="w-full lg:col-span-5 space-y-6">
        <div className="shine-card p-6 lg:p-8 border-shine-red/20">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-shine-red/10 text-shine-red px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Thursday Q&A</span>
            <span className="text-shine-gray text-xs">{selectedQA.scheduled_date}</span>
          </div>
          <h2 className="text-xl lg:text-2xl font-extrabold mb-4">{selectedQA.title.replace(/—/g, '.')}</h2>
          
          <div className="space-y-4 text-sm text-shine-gray leading-relaxed">
            <p className="italic text-white">"{selectedQA.engagement_hook.replace(/—/g, '.')}"</p>
            <p className="line-clamp-4 lg:line-clamp-none">{selectedQA.opening.replace(/—/g, '.')}</p>
            <div className="bg-shine-black/50 p-4 rounded-lg border border-white/5">
              <div className="text-shine-gold font-bold mb-2 uppercase text-[10px] tracking-widest">The Big Question</div>
              <p className="text-white font-bold text-base lg:text-lg">{selectedQA.question.replace(/—/g, '.')}</p>
            </div>
            <div className="space-y-2 hidden sm:block">
              <div className="text-[10px] font-bold uppercase tracking-widest">Comment Prompts</div>
              {selectedQA.prompts.map((p, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-shine-gold mt-1.5 shrink-0" />
                  <span className="text-xs">{p.replace(/—/g, '.')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={handleGenerate} disabled={isGenerating} className="flex-1 shine-btn-primary">
            {isGenerating ? 'GENERATING...' : 'GENERATE Q&A VISUAL'}
          </button>
          <button className="shine-btn-secondary flex items-center gap-2 justify-center">
            <Copy size={18} /> Copy Caption
          </button>
        </div>
      </div>

      <div className="w-full lg:col-span-7">
        <div className="shine-card aspect-square relative overflow-hidden group">
          {isGenerating && (
            <div className="absolute inset-0 bg-shine-black/80 flex flex-col items-center justify-center z-10">
              <Loader2 className="animate-spin text-shine-gold mb-4" size={48} />
              <div className="text-shine-gold font-bold">Creating Engagement Visual...</div>
            </div>
          )}
          {generatedImage ? (
            <img 
              src={generatedImage} 
              className="w-full h-full object-cover cursor-zoom-in" 
              alt="QA Visual" 
              onClick={() => onPreview(generatedImage)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-white/5 bg-shine-black/20">
              <MessageCircle size={64} className="text-white/5 mb-4" />
              <span className="text-white/20 font-bold uppercase tracking-[0.3em] text-center px-4">Preview Area</span>
            </div>
          )}

          {generatedImage && !isGenerating && (
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
              <button onClick={handleDownload} className="p-2 bg-shine-black/80 rounded-full text-white hover:text-shine-gold border border-white/10">
                <Download size={20} />
              </button>
              <button onClick={handleGenerate} className="p-2 bg-shine-black/80 rounded-full text-white hover:text-shine-gold border border-white/10">
                <RefreshCw size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FormatStudio = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl lg:text-3xl font-extrabold">Format Studio</h2>
        <p className="text-shine-gray text-sm">Explore and use Shannon's 11 verified brand formats.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {Object.values(FORMAT_RULES).map((format) => (
          <div key={format.id} className="shine-card p-6 flex flex-col group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <span className="w-10 h-10 rounded-lg bg-shine-gold/10 flex items-center justify-center text-shine-gold font-bold">{format.id}</span>
              <div className="flex gap-1">
                {format.palette.map(c => (
                  <div key={c} className="w-3 h-3 rounded-full border border-white/10" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
            <h3 className="font-extrabold text-lg mb-1 group-hover:text-shine-gold transition-colors">{format.name}</h3>
            <p className="text-xs text-shine-gray mb-4 flex-1">{format.use}</p>
            
            <div className="space-y-3 mb-6">
              <div className="space-y-1">
                <div className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">Always Do</div>
                {format.rules.do.map((r, i) => (
                  <div key={i} className="text-[10px] text-white/60 flex gap-2">
                    <CheckCircle2 size={10} className="mt-0.5 shrink-0" /> {r}
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="text-[8px] font-bold text-rose-500 uppercase tracking-widest">Never Do</div>
                {format.rules.dont.map((r, i) => (
                  <div key={i} className="text-[10px] text-white/60 flex gap-2">
                    <AlertCircle size={10} className="mt-0.5 shrink-0" /> {r}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-2 rounded-lg bg-white/5 text-[10px] font-bold uppercase tracking-widest hover:bg-shine-gold hover:text-shine-black transition-all">
              Try This Format
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const PromptLibrary = () => {
  const prompts = [
    { title: "Cream Flat Design", use: "Educational Tips", mj: "Flat design educational infographic, cream background #F5F0E8, thin line-art icons black outline..." },
    { title: "Dark Authority", use: "Service Ads", mj: "Bold dark authority social media graphic, warm dark background #2A2520, oversized gold bold typography..." },
    { title: "Warm Desk Overlay", use: "Prep Guides", mj: "Overhead flat lay warm beige desk, gold ballpoint pen, spiral notebook, cream sticky notes..." },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold">Prompt Library</h2>
        <p className="text-shine-gray">Pre-built AI prompt sets from the Visual Guide.</p>
      </div>

      <div className="space-y-4">
        {prompts.map((p, i) => (
          <div key={i} className="shine-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg">{p.title}</h3>
                <span className="text-[10px] bg-shine-gold/10 text-shine-gold px-2 py-0.5 rounded uppercase font-bold tracking-tighter">{p.use}</span>
              </div>
              <button className="shine-btn-primary py-2 text-xs">SEND TO IMAGEN</button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-shine-gray uppercase">Midjourney v6</span>
                  <button className="text-shine-gold hover:underline text-[10px] flex items-center gap-1"><Copy size={10} /> Copy</button>
                </div>
                <div className="bg-shine-black p-3 rounded-lg font-mono text-[10px] text-shine-gold/80 border border-white/5 leading-relaxed">
                  {p.mj}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-shine-gray uppercase">Adobe Firefly</span>
                  <button className="text-shine-gold hover:underline text-[10px] flex items-center gap-1"><Copy size={10} /> Copy</button>
                </div>
                <div className="bg-shine-black p-3 rounded-lg font-mono text-[10px] text-white/40 border border-white/5 leading-relaxed italic">
                  Similar prompt optimized for Firefly 3.0 structure...
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main App ---

const ImagePreviewModal = ({ url, onClose }: { url: string, onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-shine-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
      >
        <X size={24} />
      </button>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="max-w-full max-h-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={url} 
          className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-white/10" 
          alt="Full Resolution Preview" 
        />
        <div className="absolute bottom-[-40px] left-0 right-0 text-center">
          <p className="text-shine-gray text-xs font-mono uppercase tracking-widest">Full Resolution Preview</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [activePanel, setActivePanel] = useState('dashboard');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPanel = () => {
    switch (activePanel) {
      case 'dashboard': return <Dashboard onNavigate={setActivePanel} />;
      case 'mwf': return <MWFGenerator onPreview={setPreviewImage} />;
      case 'carousel': return <CarouselBuilder onPreview={setPreviewImage} />;
      case 'qa': return <QABuilder onPreview={setPreviewImage} />;
      case 'studio': return <FormatStudio />;
      case 'prompts': return <PromptLibrary />;
      case 'settings': return <Settings />;
      default: return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-shine-gray">
          <AlertCircle size={48} className="mb-4 opacity-20" />
          <p className="font-bold uppercase tracking-widest opacity-40">Module Under Construction</p>
          <p className="text-xs mt-2">This feature will be available in the next update.</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0E0D]">
      <Sidebar 
        activePanel={activePanel} 
        setActivePanel={setActivePanel} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />
      
      <main className="lg:ml-[260px] min-h-screen flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <div className="flex-1 p-4 lg:p-8 max-w-6xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderPanel()}
            </motion.div>
          </AnimatePresence>
        </div>

        <footer className="p-6 text-center border-t border-white/5">
          <p className="text-[10px] text-shine-gray uppercase tracking-[0.2em]">
            Let Your Light Shine | Est. 2016 | Shine Advocacy Group LLC
          </p>
        </footer>
      </main>

      <AnimatePresence>
        {previewImage && (
          <ImagePreviewModal 
            url={previewImage} 
            onClose={() => setPreviewImage(null)} 
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 left-[260px] right-0 h-8 bg-shine-dark border-t border-white/5 px-4 flex items-center justify-between text-[10px] text-shine-gray z-40">
        <div className="flex gap-4">
          <span>STATUS: <span className="text-emerald-500 font-bold">ONLINE</span></span>
          <span>LATENCY: 124ms</span>
        </div>
        <div>
          <span>© 2026 SHINE ADOVCACY GROUP</span>
        </div>
      </div>
    </div>
  );
}
