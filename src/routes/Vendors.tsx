import { useState } from 'react'
import data from '../data/quarter-2025-q2b.json'
import VendorTile, { type Vendor } from '../components/VendorTile'
import Timeline from '../components/Timeline'
import Logo from '../components/Logo'

const Vendors = () => {
  const [query, setQuery] = useState('')
  const vendors = data.vendors as Vendor[]
  const filtered = vendors.filter((v) => v.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="px-4">
      <input
        type="search"
        aria-label="Search vendors"
        placeholder="Search vendors"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-md"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((v) => (
          <VendorTile key={v.name} vendor={v} />
        ))}
      </div>
      <Timeline />
      <div className="mt-6 bg-white p-4 rounded-2xl shadow-sm" aria-label="Standards panel">
        <h3 className="font-semibold mb-2">Standards & Interoperability</h3>
        <div className="mb-4" title={data.standards.mcp.status}>
          <p className="font-medium">MCP</p>
          <div className="flex gap-2 mt-1" aria-label="MCP vendors">
            {['microsoft', 'github', 'aws', 'anthropic'].map((v) => (
              <Logo key={v} name={v} />
            ))}
          </div>
        </div>
        <div title={data.standards.a2a.status}>
          <p className="font-medium">A2A</p>
          <div className="flex gap-2 mt-1" aria-label="A2A vendors">
            {['openai', 'anthropic', 'google', 'microsoft'].map((v) => (
              <Logo key={v} name={v} />
            ))}
          </div>
        </div>
        <p className="text-xs mt-2 text-gray-600">Links forthcoming</p>
      </div>
    </div>
  )
}

export default Vendors
