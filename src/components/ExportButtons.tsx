interface ExportProps {
  data: Record<string, { checked: boolean; notes: string }>
}

const ExportButtons = ({ data }: ExportProps) => {
  const exportCsv = () => {
    const rows = Object.entries(data).map(([item, { checked, notes }]) => [item, checked, notes])
    const csv = ['Item,Checked,Notes', ...rows.map((r) => r.map((c) => `"${c}"`).join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'checklist.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex gap-2 mt-4">
      <button className="px-3 py-1 bg-accent text-white rounded" onClick={exportCsv} aria-label="Export CSV">
        Export CSV
      </button>
      <button className="px-3 py-1 border rounded" onClick={() => window.print()} aria-label="Print">
        Print PDF
      </button>
    </div>
  )
}

export default ExportButtons
