import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    description: "",
    deadline: "",
    reference: "",
    budget: "",
    tech: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    // e.preventDefault();

    return emailjs.send(
    //   "YOUR_SERVICE_ID",
    process.env.EMAILSERVICEID,
    //   "YOUR_TEMPLATE_ID",
    process.env.TEMPELATE1ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        projectType: formData.projectType,
        project: formData.description,
        deadline: formData.deadline,
        reference: formData.reference,
        budget: formData.budget,
        tech: formData.tech,
      },
    //   "YOUR_PUBLIC_KEY"
    process.env.PUBLICKEY
    );

    
  };

  const sendEmailtoUser = () => {
    // e.preventDefault();

    return emailjs.send(
    //   "YOUR_SERVICE_ID",
    process.env.EMAILSERVICEID,
    //   "YOUR_TEMPLATE_ID",
    process.env.TEMPELATE2ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        // company: formData.company,
        projectType: formData.projectType,
        project: formData.description,
       
      },
    //   "YOUR_PUBLIC_KEY"
    process.env.PUBLICKEY
    );
    
  };
  const handleSubmit = async(e) => {
  e.preventDefault();
  try{
  await sendEmail();
  await sendEmailtoUser();
  alert("Project request sent successfully!");
  setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        description: "",
        deadline: "",
        reference: "",
        budget: "",
        tech: "",
      });
  }catch(error){
    console.error(error);
      alert(" Something went wrong. Try again.");

  }
};

{/* <form onSubmit={handleSubmit} className="grid gap-6"> */}

  

  return (
    <section className="min-h-screen py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* <div className="text-center mb-12"> */}
  {/* <span className="text-sm uppercase tracking-widest text-muted-foreground">
    AppifiesTech
  </span> */}
  <div className="text-center mb-8">
<span className="inline-block bg-primary text-primary-foreground 
    px-40 py-5 rounded-full text-2xl md:text-3xl 
    font-bold tracking-wide shadow-lg">
    AppifiesTech
  </span>
  </div>
 

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your Project
          </h1>
          <p className="text-muted-foreground text-lg">
            Fill this form and our team will contact you within 24 hours with a clear project plan.
          </p>
        </div>

        {/* FORM CARD */}
        
        <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="grid gap-6">

            {/* CLIENT INFO */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="input"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="WhatsApp Number"
                className="input"
                required
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name (Optional)"
                className="input"
              />
            </div>

            {/* PROJECT TYPE */}
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="input"
              required
            >
              <option value="">Select Project Type</option>
              <option>Mobile App Development</option>
              <option>Website Development</option>
              <option>UI / UX Design</option>
              <option>Backend Development</option>
              <option>AI Integration</option>
            </select>

            {/* PROJECT DETAILS */}
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project idea..."
              rows={5}
              className="input"
              required
            />

            {/* DEADLINE */}
            <input
              type="text"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              placeholder="Expected Deadline (eg. 2 Months)"
              className="input"
            />

            {/* EXAMPLE LINK */}
            <input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              placeholder="Any Reference App/Website Link (Optional)"
              className="input"
            />

            {/* BUDGET */}
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="input"
              required
            >
              <option value="">Select Budget Range</option>
              <option>₹10k – ₹25k</option>
              <option>₹25k – ₹50k</option>
              <option>₹50k – ₹1L</option>
              <option>₹1L – ₹5L</option>
              <option>₹5L+</option>
            </select>

            {/* TECH PREFERENCE */}
            <select
              name="tech"
              value={formData.tech}
              onChange={handleChange}
              className="input"
            >
              <option value="">Preferred Technology</option>
              <option>Flutter</option>
              <option>React</option>
              <option>Node.js</option>
              <option>Firebase</option>
              <option>No Preference</option>
            </select>

            {/* SUBMIT */}
            <Button size="lg" type="submit" className="w-full mt-4 gap-2">
              <Send className="w-5 h-5" />
              Get Free Project Plan
            </Button>

          </form>
        </div>

        {/* TRUST BADGES */}
        <div className="grid md:grid-cols-3 gap-6 text-center mt-10 text-sm text-muted-foreground">
          <div> 50+ Projects Completed</div>
          <div> NDA on Request</div>
          <div> 24 Hour Response Time</div>
        </div>

      </div>
    </section>
  );
};

export default StartProject;
