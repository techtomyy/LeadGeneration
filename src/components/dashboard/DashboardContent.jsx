export default function DashboardContent() {
  return (
    <main className="flex-1 bg-[var(--bg-primary)] p-2 sm:p-4 border border-[var(--border-input)] rounded-2xl">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-secondary)] mb-2">Welcome back 👋</h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">Real-time scraping • Multi-source • Email verification</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="px-3 sm:px-4 py-2 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-lg border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-colors text-sm">
            Plan: Pro
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[var(--btn-primary)] to-[var(--btn-secondary)] text-[var(--bg-accent)] rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm sm:text-base" style={{ background: 'var(--btn-gradient)' }}>
            New Lead Search
          </button>
        </div>
      </div>

      {/* Live Engine Snapshot Card and Quick Actions Card - Responsive Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Live Engine Snapshot Card */}
        <div className="bg-[var(--bg-secondary)] rounded-xl p-3 sm:p-4 border border-[var(--border-primary)]">
          <div className="flex items-start sm:items-center justify-between mb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-[var(--text-secondary)] mb-1">Live engine snapshot</h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)]">Real-time scraping • Multi-source • Verification</p>
              <span className="text-xs text-[var(--text-muted)]">Updated: Aug 16, 2025</span>
            </div>
          </div>

          {/* Metrics - Responsive Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-10 mb-4">
            <div className="text-center">
              <div className="text-xs sm:text-sm text-[var(--text-muted)] mb-1">Scraped</div>
              <div className="text-2xl sm:text-3xl font-bold text-[var(--text-secondary)]">1,248</div>
            </div>
            <div className="text-center">
              <div className="text-xs sm:text-sm text-[var(--text-muted)] mb-1">Cleaned</div>
              <div className="text-2xl sm:text-3xl font-bold text-[var(--text-secondary)]">1,190</div>
            </div>
            <div className="text-center">
              <div className="text-xs sm:text-sm text-[var(--text-muted)] mb-1">Verified</div>
              <div className="text-2xl sm:text-3xl font-bold text-[var(--text-secondary)]">1,132</div>
            </div>
          </div>

          {/* Action Buttons - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-6 sm:my-12">
            <button className="px-3 sm:px-4 py-2 text-[var(--text-secondary)] rounded-lg font-medium text-sm" style={{ background: 'var(--btn-gradient)' }}>
              Open Latest List
            </button>
            <button className="px-3 sm:px-4 py-2 text-[var(--text-secondary)] rounded-lg border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-colors text-sm">
              Auto-refresh
            </button>
            <button className="px-3 sm:px-4 py-2 text-[var(--text-secondary)] rounded-lg border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-colors text-sm">
              Queue
            </button>
          </div>
        </div>

        {/* Combined Quick Actions and Recent Lists Card */}
        <div className="bg-[var(--bg-secondary)] rounded-xl p-3 sm:p-4 border border-[var(--border-primary)]">
          {/* Quick Actions Section */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-[var(--text-secondary)] mb-1">Quick Actions</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-4">One-click</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-6 sm:my-12">
              <button className="px-3 sm:px-4 py-2 text-[var(--text-secondary)] rounded-lg font-medium text-sm" style={{ background: 'var(--btn-gradient)' }}>
                Lead Finder
              </button>
              <button className="px-3 sm:px-4 py-2 text-[var(--text-secondary)] rounded-lg border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-colors text-sm">
                Industry Packages
              </button>
              <button className="px-3 sm:px-4 py-2 text-[var(--text-secondary)] rounded-lg border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-colors text-sm">
                Connect CRM
              </button>
            </div>
          </div>

          {/* Recent Lists Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[var(--text-muted)] mb-2">Recent lists</h3>

            {/* Column Headers - Hidden on very small screens */}
            <div className="hidden sm:flex items-center justify-between py-2 px-3 mb-3 border-b border-[var(--border-primary)] last:border-b-0">
              <div className="flex-1 font-medium text-[var(--text-muted)] text-sm">List</div>
              <div className="w-20 text-center font-medium text-[var(--text-muted)] text-sm">Created</div>
              <div className="w-20 text-center font-medium text-[var(--text-muted)] text-sm">Verified</div>
              <div className="w-20 text-center font-medium text-[var(--text-muted)] text-sm">Action</div>
            </div>

            <div className="space-y-3">
              {/* List Item 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-[var(--border-primary)] last:border-b-0 space-y-2 sm:space-y-0">
                <div className="flex-1">
                  <div className="font-medium text-[var(--text-secondary)] text-sm sm:text-base">Dentists - NYC</div>
                  <div className="sm:hidden text-xs text-[var(--text-muted)]">Aug 10 • 412 verified</div>
                </div>
                <div className="hidden sm:block w-20 text-center text-sm text-[var(--text-secondary)]">Aug 10</div>
                <div className="hidden sm:block w-20 text-center text-sm text-[var(--text-secondary)]">412</div>
                <div className="w-full sm:w-16 text-center">
                  <button className="w-full sm:w-auto px-3 py-1 text-[var(--text-secondary)] rounded text-sm border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-colors">
                    Open
                  </button>
                </div>
              </div>

              {/* List Item 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-[var(--border-primary)] last:border-b-0 space-y-2 sm:space-y-0">
                <div className="flex-1">
                  <div className="font-medium text-[var(--text-secondary)] text-sm sm:text-base">IT Services - CA</div>
                  <div className="sm:hidden text-xs text-[var(--text-muted)]">Aug 11 • 226 verified</div>
                </div>
                <div className="hidden sm:block w-20 text-center text-sm text-[var(--text-secondary)]">Aug 11</div>
                <div className="hidden sm:block w-20 text-center text-sm text-[var(--text-secondary)]">226</div>
                <div className="w-full sm:w-16 text-center">
                  <button className="w-full sm:w-auto px-3 py-1 text-[var(--text-secondary)] rounded text-sm border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-colors">
                    Open
                  </button>
                </div>
              </div>

              {/* List Item 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 space-y-2 sm:space-y-0">
                <div className="flex-1">
                  <div className="font-medium text-[var(--text-secondary)] text-sm sm:text-base">Restaurants - TX</div>
                  <div className="sm:hidden text-xs text-[var(--text-muted)]">Aug 14 • 318 verified</div>
                </div>
                <div className="hidden sm:block w-20 text-center text-sm text-[var(--text-secondary)]">Aug 14</div>
                <div className="hidden sm:block w-20 text-center text-sm text-[var(--text-secondary)]">318</div>
                <div className="w-full sm:w-16 text-center">
                  <button className="w-full sm:w-auto px-3 py-1 text-[var(--text-secondary)] rounded text-sm border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-colors">
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
