export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
            className="space-y-4"
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className="w-full p-3 border rounded-lg"
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="w-full p-3 border rounded-lg"
              required 
            />
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              className="w-full p-3 border rounded-lg"
              required
            ></textarea>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    )
  }