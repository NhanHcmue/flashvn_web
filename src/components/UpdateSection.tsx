import Link from 'next/link';

const updates = [
  {
    title: 'Latest program',
    summary: 'Summary',
    link: '#'
  },
  {
    title: 'News',
    summary: 'Summary',
    link: '#'
  },
  {
    title: 'Blog',
    summary: 'Summary',
    link: '#'
  }
];

const socialLinks = [
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@flashvn'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/duanflashvn'
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/@duanflashvn'
  },
  {
    name: 'LinkedIn',
    href: '#'
  }
];

export default function UpdateSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-black mb-8">Stay update!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {updates.map((item, index) => (
            <div 
              key={index}
              className="border border-black rounded-lg p-6 space-y-4"
            >
              <h3 className="font-semibold text-lg text-black">{item.title}</h3>
              <p className="text-black">{item.summary}</p>
              <Link 
                href={item.link}
                className="inline-block border border-gray-900 rounded-full px-6 py-2 text-sm text-black hover:bg-gray-900 hover:text-white transition-colors"
              >
                Find out more
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-black mb-6">Follow us on social media</h2>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="px-6 py-2 border border-black rounded-full text-black hover:border-gray-900 transition-colors"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 