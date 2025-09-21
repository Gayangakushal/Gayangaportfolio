import { useState } from "react";
import { Palette, Eye, ExternalLink } from "lucide-react";
import fashionDesign from "@/assets/fashion-design.png";
import pubgDesign1 from "@/assets/pubg-design-1.png";
import pubgDesign2 from "@/assets/pubg-design-2.png";
import untitled1 from "@/assets/Untitled-1.png";
import creative from "@/assets/crative markrting agency.png";
import codeRedEp3 from "@/assets/codered ep 3.1.png";
import creativeMarketingAgency from "@/assets/crative markrting agency.png";
import fergandoEp1 from "@/assets/fergando2.png";
import fergandoEp2 from "@/assets/fg2 (3).png";
import fashionSaleDesign from "@/assets/no compalete design.png";
import birthdaySurprise from "@/assets/podiya2.3.png";
import Rankpush from "@/assets/my test 2.png";


export default function GraphicDesign() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const designs = [
    {
      title: "Fashion Sale Campaign",
      category: "Fashion Marketing",
      image: fashionDesign,
      description: "Modern fashion sale promotional design with purple gradient theme and dynamic layout."
    },
    {
      title: "PUBG Tournament Poster",
      category: "Gaming Event",
      image: pubgDesign1,
      description: "Gaming tournament promotional design with dramatic character composition and prize information."
    },
    {
      title: "PUBG League Design",
      category: "Gaming Event",
      image: pubgDesign2,
      description: "Professional esports league promotional design with tournament details and prize structure."
    },
 {
      title: "Uber Colombo Design",
      category: "Face Book Ads Design",  
      image: untitled1,
      description: "Professional ride-hailing service promotional design with city travel benefits, safety features, and fare details."
    },

     {
      title: "Creative Marketing Agency",
      category: "Face Book Ads Design",  
      image: creative,
      description: "Creative marketing agency promotional design with brand identity highlights, digital strategy showcase, client success stories, and innovative campaign visuals."
    }
    ,
    {
      title: "Code Red Episode 3",
      category: "YouTube Thumbnail",
      image: codeRedEp3,
      description: "Dramatic YouTube thumbnail design for horror/thriller content with bold typography and atmospheric visuals."
    },
    {
      title: "Creative Marketing Agency",
      category: "Business Marketing",
      image: creativeMarketingAgency,
      description: "Professional marketing agency promotional design with modern layout and call-to-action elements."
    },
    {
      title: "Fergando Episode 1",
      category: "YouTube Thumbnail",
      image: fergandoEp1,
      description: "Compelling YouTube thumbnail with map integration and dramatic portrait composition for storytelling content."
    },
    {
      title: "Fergando Episode 2",
      category: "YouTube Thumbnail",
      image: fergandoEp2,
      description: "Crime/thriller themed YouTube thumbnail with atmospheric background and professional portrait layout."
    },
    {
      title: "Fashion Sale Campaign",
      category: "E-commerce Design",
      image: fashionSaleDesign,
      description: "Vibrant fashion sale promotional design with product showcase and clear pricing information."
    },

     {
      title: "Rankpush Gaming",
      category: "Gaming Event",
      image: Rankpush,
      description: "Dynamic gaming event promotional design with bold typography and energetic layout."
    },

    {
      title: "Birthday Surprise",
      category: "Event Design",
      image: birthdaySurprise,
      description: "Celebratory birthday event design with dynamic typography and festive atmosphere."
    }

  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Graphic Design</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creative visual designs for marketing campaigns, gaming events, and promotional materials
            showcasing my blend of artistic vision and strategic communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div
              key={index}
              className="glass-card group overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button
                      onClick={() => setSelectedImage(design.image)}
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Full Size
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="text-accent text-sm font-medium">{design.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{design.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{design.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl">
              <img
                src={selectedImage}
                alt="Full size design"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}