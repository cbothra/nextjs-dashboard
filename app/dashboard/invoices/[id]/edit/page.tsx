import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log('id in the edit invoice page:: ', id);
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  console.log("edit invoice page:: ", invoice);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: `/dashboard/invoices` },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${invoice.id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customers={customers} invoice={invoice}/>
    </main>
  );
}