export const referalSubject = (position: string, companyName: string) => {
  return `Seeking Opportunity to Serve and Grow with ${companyName} As ${position}`;
};

export const referalMail = (
  name: string,
  companyName: string,
  position: string
) => {
  return `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; color: #000; line-height: 1.6; font-size: 16px;">
  
          <p>Hi ${name},</p>
  
          <p>
    I’m <strong>Sujay Sharvesh</strong>, a software developer passionate about building scalable, secure, and maintainable systems. 
    My core tech stack includes 
    <strong style="color:#000000;">
      Java, Spring Boot, PostgreSQL, MongoDB, Redis, Docker, and AWS (EC2, S3)
    </strong>.
  </p>

          <p>
             After coming across the ${position} opening at ${companyName}, I felt that the role aligns closely 
             with my experience and skills.
          </p>

          <p>
             I recently interned at Aaytham Consulting as a Backend Developer Intern, where I worked extensively with 
             Java and Spring Boot, building RESTful APIs and integrating microservices. I’m deeply passionate about 
            scalable engineering and would be excited to contribute to ${companyName} in delivering high-quality 
            technology solutions.
          </p>
  
          <p>
            I’ve attached my resume and portfolio below. I would truly appreciate it if you could consider me for ${position}
          </p>
  
          <p>
            Portfolio: <a href="https://sujaysharvesh.vercel.app/">https://sujaysharvesh.vercel.app/</a><br>
            GitHub: <a href="https://github.com/sujaysharvesh">https://github.com/sujaysharvesh</a>
          </p>
  
          <p>
            Thank you so much for your time and support.  
            Looking forward to hearing from you.
          </p>
  
          <p>
            Best regards,<br>
            Sujay Sharvesh<br>
            +91 7904983557<br>
            sharveshsujay@gmail.com
          </p>
  
        </body>
      </html>
    `;
};
