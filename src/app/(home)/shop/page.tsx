import { Sidebar } from '@/components';
import { CustomSelect } from '@/components/molecules/global/CustomSelect';

export default function Shop() {
  return (
    <div className="mt-15 flex gap-5 mx-auto container">
      <Sidebar className="flex-none" />
      <div className="flex-1">
        <div className="flex justify-between">
          <p>Nama Produk</p>
          <CustomSelect
            placeholder="Pick an OS"
            options={[
              { label: 'Windows', value: 'win' },
              { label: 'MacOS', value: 'mac' },
              { label: 'Linux', value: 'linux' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
