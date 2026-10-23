import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Maximize2, X, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/interiorsData';

interface ProjectsSectionProps {
  onOpenConsultation: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Kitchen', 'Wood Work', 'Living Room', 'Bedroom', 'Commercial'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-white border-b border-[#2D2422]/10" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
              Portfolio & Workmanship
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#2D2422] tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              Real projects delivered across Chennai. Inspected with pride, built for generations.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F8F5F2] rounded-xl border border-neutral-200 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#5D4037] text-white shadow-xs'
                    : 'text-[#2D2422]/70 hover:text-[#5D4037] hover:bg-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-neutral-500">
            Showing <span className="font-mono tabular-nums font-semibold text-[#2D2422]">{filteredProjects.length}</span> signature projects
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 transition-colors cursor-pointer shadow-xs"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 transition-colors cursor-pointer shadow-xs"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track matching Flutter ListView(scrollDirection: Axis.horizontal) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectModal(project)}
              className="min-w-[280px] sm:min-w-[320px] max-w-[340px] bg-white rounded-[20px] border border-neutral-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex-shrink-0 cursor-pointer group flex flex-col snap-start overflow-hidden"
            >
              {/* Image Container with 20px top radius */}
              <div className="relative h-56 w-full overflow-hidden bg-[#EDE7E3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Clean unboxed category overlay */}
                <div className="absolute top-3 left-3 text-[11px] font-semibold text-white bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  {project.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{project.location}</span>
                  </span>
                  <span className="font-mono tabular-nums text-neutral-300">
                    {project.duration}
                  </span>
                </div>
              </div>

              {/* Card Bottom Body matching Flutter projectCard style */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#2D2422] group-hover:text-[#5D4037] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-[#5D4037]">
                  <span className="text-neutral-500 font-mono">{project.area}</span>
                  <span className="flex items-center gap-1 text-[#D4AF37] font-semibold">
                    View Project <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Lightbox Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
            <div 
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white bg-gradient-to-t from-black/80 to-transparent p-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                    {activeProjectModal.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold">
                    {activeProjectModal.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                {/* Meta details */}
                <div className="grid grid-cols-3 gap-3 p-3 bg-[#F8F5F2] rounded-xl text-center border border-neutral-200 text-xs">
                  <div>
                    <span className="text-neutral-500 block">Location</span>
                    <span className="font-semibold text-[#2D2422]">{activeProjectModal.location}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Scale</span>
                    <span className="font-semibold text-[#2D2422]">{activeProjectModal.area}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Execution</span>
                    <span className="font-semibold text-[#2D2422]">{activeProjectModal.duration}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">Project Narrative</h4>
                  <p className="text-sm sm:text-base text-neutral-700 mt-2 leading-relaxed">
                    {activeProjectModal.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-semibold text-[#5D4037] tracking-wider mb-2.5">
                    Executed Specifications & Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                    {activeProjectModal.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-neutral-50 rounded-lg border border-neutral-200/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setActiveProjectModal(null);
                      onOpenConsultation();
                    }}
                    className="px-5 py-2.5 bg-[#5D4037] hover:bg-[#462F28] text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer"
                  >
                    Discuss Similar Project For Your Space
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
