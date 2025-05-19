import React, { useState } from 'react';
import { Info, Download } from 'lucide-react';
import Button from './ui/Button';
import catHtrVideo from '../assets/cat htr video.mp4';

const TechnologySection: React.FC = () => {
  // State for the interactive 3D model (simplified for this implementation)
  const [modelRotation, setModelRotation] = useState({ x: 0, y: 0 });
  
  // Compare technologies data
  const compareTechnologies = [
    {
      name: 'CAT-HTR (Our Technology)',
      efficiency: '85-90%',
      feedstock: 'Wide range of agricultural waste',
      output: 'High-quality SAF & SMF',
      carbon: 'Up to 80% reduction',
      highlight: true
    },
    {
      name: 'Pyrolysis',
      efficiency: '60-75%',
      feedstock: 'Limited feedstock range',
      output: 'Lower quality, needs upgrading',
      carbon: '40-60% reduction',
      highlight: false
    },
    {
      name: 'Gasification',
      efficiency: '65-80%',
      feedstock: 'Requires dry feedstock',
      output: 'Syngas, requires processing',
      carbon: '45-65% reduction',
      highlight: false
    },
    {
      name: 'Fermentation',
      efficiency: '40-55%',
      feedstock: 'Sugars and starches',
      output: 'Primarily ethanol',
      carbon: '35-50% reduction',
      highlight: false
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our CAT-HTR Technology</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Catalytic Hydrothermal Reactor technology converts biomass into high-quality renewable fuels through an innovative liquefaction process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Interactive 3D Model (updated with video) */}
          <div className="bg-gradient-to-br from-green-100 via-blue-50 to-white rounded-2xl shadow-2xl p-4 sm:p-8 h-[30rem] sm:h-[44rem] flex items-center justify-center relative overflow-hidden group transition-all duration-300">
            <div
              className="w-full h-full relative transition-transform duration-300 rounded-2xl border-4 border-green-300 shadow-xl overflow-hidden group-hover:scale-105 group-hover:shadow-2xl"
              style={{
                transform: `rotateX(${modelRotation.x}deg) rotateY(${modelRotation.y}deg)`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              onMouseMove={e => {
                const rect = (e.target as HTMLDivElement).getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateY = ((x / rect.width) - 0.5) * 40;
                const rotateX = ((y / rect.height) - 0.5) * -40;
                setModelRotation({ x: rotateX, y: rotateY });
              }}
              onMouseLeave={() => setModelRotation({ x: 0, y: 0 })}
            >
              <video
                src={catHtrVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
                style={{ userSelect: 'none', pointerEvents: 'none' }}
              />
              {/* Overlay label/icon */}
              <div className="absolute top-4 left-4 bg-white/80 text-green-800 px-3 py-1 rounded-full flex items-center gap-2 shadow-md text-sm font-semibold">
                <Info size={18} className="text-green-600" />
                CAT-HTR Facility
              </div>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none">
              <div className="text-white bg-black/60 px-4 py-2 rounded-lg text-base opacity-0 group-hover:opacity-100 transition-opacity font-medium tracking-wide shadow-lg">
                Rotate
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">How CAT-HTR Works</h3>
            <p className="text-gray-600 mb-6">
              The Catalytic Hydrothermal Reactor (CAT-HTR) technology uses supercritical water to convert agricultural waste into high-quality biocrude oil, which is then refined into sustainable aviation fuel (SAF) and sustainable maritime fuel (SMF).
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Collection & Preparation</h4>
                  <p className="text-gray-600">Agricultural waste is collected, cleaned, and processed to prepare it for conversion.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Hydrothermal Processing</h4>
                  <p className="text-gray-600">Biomass is processed at high temperature and pressure in the presence of water and catalysts.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Refinement</h4>
                  <p className="text-gray-600">The biocrude oil is refined into high-quality fuels that meet international standards.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">4</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Distribution</h4>
                  <p className="text-gray-600">The sustainable fuels are distributed to aviation and maritime partners.</p>
                </div>
              </div>
            </div>

            <Button 
              variant="primary" 
              icon={<Download size={18} />}
            >
              Request Technical Whitepaper
            </Button>
          </div>
        </div>

        {/* Technology Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="bg-green-800 text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Technology Comparison</h3>
            <p className="text-green-100">See how CAT-HTR stacks up against alternative biofuel technologies</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technology</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Efficiency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedstock Flexibility</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output Quality</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carbon Reduction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {compareTechnologies.map((tech, index) => (
                  <tr 
                    key={index} 
                    className={tech.highlight ? "bg-green-50" : ""}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className={`text-sm font-medium ${tech.highlight ? "text-green-800" : "text-gray-900"}`}>
                            {tech.name}
                            {tech.highlight && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Our Technology
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.efficiency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.feedstock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.output}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.carbon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Process Flow Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-10 text-center">Biomass to Fuel Conversion Process</h3>
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
              {[
                { label: "Biomass Collection" },
                { label: "CAT-HTR Processing" },
                { label: "Refinement" },
                { label: "SAF & SMF Production" }
              ].map((step, idx, arr) => (
                <div key={step.label} className="flex items-center w-full">
                  <div className="flex flex-col items-center w-full">
                    <div className="bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-lg font-bold border-4 border-green-200 transition-transform duration-300 hover:scale-110">
                      {idx + 1}
                    </div>
                    <div className="mt-3 text-center font-semibold text-green-900">{step.label}</div>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex-1 flex justify-center items-center">
                      <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="12" x2="50" y2="12" stroke="#22c55e" strokeWidth="3" strokeDasharray="8,6" />
                        <polygon points="50,6 60,12 50,18" fill="#22c55e" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;