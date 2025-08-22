export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Component Preview</h1>
          <p className="text-gray-600">This page will be replaced with generated component code</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Placeholder Component</h2>
            <p className="text-gray-600">Your generated component will appear here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
