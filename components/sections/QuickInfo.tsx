export default function QuickInfo() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Info Box 1 */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">1000+</h3>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          
          {/* Quick Info Box 2 */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">50+</h3>
            <p className="text-gray-600">Expert Faculty</p>
          </div>
          
          {/* Quick Info Box 3 */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">25+</h3>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  )
}
