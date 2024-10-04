import { cn } from '@/lib/utils'
import {
  FaFacebook,
  FaLinkedinIn,
  FaTelegram,
  FaViber,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6'
import { LuMail } from 'react-icons/lu'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share'
import ShareLinkButton from './ShareLinkButton'
import { usePathname } from 'next/navigation'

const buttons = [
  {
    component: FacebookShareButton,
    color: 'bg-[#1877F2]',
    icon: FaFacebook,
  },
  {
    component: TwitterShareButton,
    color: 'bg-black',
    icon: FaXTwitter,
  },
  {
    component: LinkedinShareButton,
    color: 'bg-[#0077B5]',
    icon: FaLinkedinIn,
  },
  {
    component: WhatsappShareButton,
    color: 'bg-[#25D366]',
    icon: FaWhatsapp,
  },
  {
    component: ViberShareButton,
    color: 'bg-[#7360f2]',
    icon: FaViber,
  },
  {
    component: TelegramShareButton,
    color: 'bg-[#24A1DE]',
    icon: FaTelegram,
  },
  {
    component: EmailShareButton,
    color: 'bg-zinc-900/50',
    icon: LuMail,
  },
]

const ShareSocialButtons = () => {
  const pathname = usePathname()

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`

  return (
    <div className={cn('flex gap-2 mt-5 -mx-5 px-5 overflow-y-auto')}>
      <ShareLinkButton url={url} />
      {buttons.map((button, index) => (
        <button.component
          key={index}
          className={cn('text-white p-5 rounded-full', button.color)}
          url={url}
          resetButtonStyle={false}
        >
          <button.icon className={cn('w-7 h-7')} />
        </button.component>
      ))}
    </div>
  )
}

export default ShareSocialButtons
