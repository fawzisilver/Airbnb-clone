import Link from 'next/link'
import { TbBuildingStore } from 'react-icons/tb'
import { Button } from '../ui/button'

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <TbBuildingStore className="w-6 h-6"/>
      </Link>
    </Button>
  )
}

export default Logo