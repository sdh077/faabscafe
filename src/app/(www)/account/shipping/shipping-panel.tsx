import { Address } from "@/interface/user"

function ShippingLine({ address }: { address: Address }) {
  return (
    <section className="border p-4">
      <ul>
        <li className="md:flex md:justify-between md:items-center  border-slate-200 dark:border-slate-700">
          <div className="text-md text-slate-800 dark:text-slate-100 font-medium">{address.is_default ? '[기본배송지]' : ''} {address.name}</div>
        </li>
        <li className="md:flex md:justify-between md:items-center  border-slate-200 dark:border-slate-700">
          <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">[{address.post}] {address.address1}, {address.address2}</div>
        </li>
        <li className="md:flex md:justify-between md:items-center  border-slate-200 dark:border-slate-700">
          <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">{address.phone}</div>
        </li>
        <li className="md:items-center py-3 border-slate-200 dark:border-slate-700">
          <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">요청사항</div>
          <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">{address.request}</div>
        </li>
        <li className="md:flex md:justify-end md:items-center py-3 border-slate-200 dark:border-slate-700">
          <div className="text-sm text-slate-600 dark:text-slate-400 ml-4">
            <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">Edit</a>
          </div>
        </li>
      </ul>
    </section>
  )
}
export default function ShippingPanel({ addressbook }: { addressbook: Address[] }) {
  return (
    <div className="grow">

      {/* Panel body */}
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-4">Shipping & Invoices</h2>
          <div className="text-sm">This workspace&apos;s Basic Plan is set to <strong className="font-medium">$34</strong> per month and will renew on <strong className="font-medium">July 9, 2021</strong>.</div>
        </div>
        {addressbook.map(address =>
          <ShippingLine key={address.id} address={address} />
        )}
      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
          <div className="flex self-end">
            <button className="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">Cancel</button>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
          </div>
        </div>
      </footer>

    </div>
  )
}