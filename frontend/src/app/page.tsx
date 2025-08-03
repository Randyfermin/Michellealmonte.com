import '../styles/globals.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-soft-ivory">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-serif font-bold text-brand-cocoa-brown mb-6">
            Michelle Almonte
          </h1>
          <p className="text-xl text-brand-soft-terracotta mb-8">
            Professional Image Consultant & Personal Stylist
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-brand-cocoa-brown leading-relaxed mb-12">
              Transform your personal image and boost your confidence with expert styling, 
              color analysis, and wardrobe consulting services. Discover your authentic 
              style and make a lasting impression.
            </p>
          </div>
          
          <div className="space-x-4">
            <button className="btn-primary">
              Book Consultation
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-4xl font-serif text-center text-brand-cocoa-brown mb-12">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-xl font-serif text-brand-cocoa-brown mb-4">
                Personal Styling
              </h3>
              <p className="text-brand-cocoa-brown">
                Discover your unique style with personalized analysis and guidance.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-serif text-brand-cocoa-brown mb-4">
                Color Analysis
              </h3>
              <p className="text-brand-cocoa-brown">
                Find your perfect color palette to enhance your natural beauty.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-serif text-brand-cocoa-brown mb-4">
                Wardrobe Consulting
              </h3>
              <p className="text-brand-cocoa-brown">
                Optimize your wardrobe with expert organization and planning.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="section-padding bg-brand-yellow-butter">
        <div className="container text-center">
          <h2 className="text-4xl font-serif text-brand-cocoa-brown mb-6">
            Ready to Transform Your Image?
          </h2>
          <p className="text-lg text-brand-cocoa-brown mb-8 max-w-2xl mx-auto">
            Let's work together to unlock your style potential and boost your confidence.
          </p>
          <button className="btn-primary">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  )
}
