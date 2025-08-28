interface Update {
  title: string
  whyItMatters: string
  notes: string[]
}

export interface Vendor {
  name: string
  updates: Update[]
}

const VendorTile = ({ vendor }: { vendor: Vendor }) => (
  <div className="bg-white p-4 rounded-2xl shadow-sm">
    <h3 className="font-semibold text-lg mb-2">{vendor.name}</h3>
    <ul className="space-y-2">
      {vendor.updates.map((u) => (
        <li key={u.title} className="text-sm">
          <p className="font-medium">{u.title}</p>
          <p className="text-gray-600">{u.whyItMatters}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default VendorTile
