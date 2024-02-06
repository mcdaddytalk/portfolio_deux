import React from 'react'

type SectionHeaderProps = {
    title: string;
}
function SectionHeader({ title }: Readonly<SectionHeaderProps>) {
  return (
    <h3 className="absolute top-24 uppercase tracking-[20px] text-slate-500 text-2xl">{title}</h3>
  )
}

export default SectionHeader