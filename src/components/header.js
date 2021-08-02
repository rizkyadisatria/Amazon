import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { selectItems } from "../slices/basketSlice"
import { 
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
function header() {
    const [session] = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)

    return (
        <header>
            {/* top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image onClick={() => router.push('/')}
                     src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    width={150} height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                    />
                </div>
                {/* Search */}
                <div className="hidden cursor-pointer sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                <SearchIcon className="h-12 p-4"/>
                </div>
                {/* Right */}
                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
                        <p className="hover:underline">
                            {session ? `Hello, ${session.user.name}` : 'Sign In'}
                        </p>
                        <p className="font-extrabold md:text-sm">Account & List</p>
                    </div>
                    <div onClick={() => router.push('/orders')} className="cursor-pointer link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={() => router.push('/checkout')} className="relative link flex items-center cursor-pointer">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
            {/* bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default header