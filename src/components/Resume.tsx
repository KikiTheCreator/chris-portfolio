export default function Resume() {
  return (
    <div className="p-6 sm:p-12 text-white flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-3xl px-4">
        <a
          href="/christopherPrietoCV.pdf"
          download
          className="flex-1 bg-white text-black hover:bg-gray-100 rounded-md py-4 sm:py-5 px-8 text-center transition-all duration-200 flex items-center justify-center gap-3 text-lg sm:text-lg font-medium"
        >
          <span>Download CV</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/christopherprietog/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-transparent text-white hover:bg-white hover:text-black border-1 border-white rounded-md py-4 sm:py-5 px-8 text-center transition-all duration-200 flex items-center justify-center gap-3 text-lg sm:text-lg font-medium"
        >
          <span>LinkedIn</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
