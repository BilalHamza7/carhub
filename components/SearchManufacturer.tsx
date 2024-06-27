
import { Combobox, Transition } from '@/node_modules/@headlessui/react/dist/index'
import { SearchManufacturerProps } from '@/types/index'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer