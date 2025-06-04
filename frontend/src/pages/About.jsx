function About() {
  return (
    <div className="p-10 bg-gray-700 text-white h-[92vh]">
      <h1 className="text-4xl font-bold mb-4">🧾 About Code Reviewer</h1>
      <p className="text-lg mb-4">
        <b>Code Reviewer</b> is an AI-powered tool designed to assist developers in improving their code.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>🧠 <b>Code Review:</b> Analyzes your code for errors and improvements.</li>
        <li>✨ <b>Enhance Code:</b> Refactors code for better readability and performance.</li>
        <li>📖 <b>Explain Code:</b> Converts code into easy-to-understand explanations.</li>
      </ul>
      <p className="mt-6 text-lg">
        This tool is ideal for beginners and professionals seeking quick AI-driven insights into their code.
      </p>
      <p></p>
    </div>
  );
}

export default About;
