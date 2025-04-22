import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';

import FacebookLogo from '../../public/icons/FacebookLogo';
import InstagramLogo from '../../public/icons/InstagramLogo';
import styles from './Header.module.css';

type LinkProps = {
  href: string;
  locale: 'en' | 'my';
  active: boolean;
};

const MyLink: React.FC<LinkProps> = ({
  href,
  locale,
  children,
  active,
  ...rest
}) => {
  return (
    <Link href={href} locale={locale}>
      <a
        className={`py-2 px-4 text-center ${
          active ? 'bg-gray200 text-gray500' : 'bg-white text-gray500'
        }`}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};

const TopNav = () => {
  const router = useRouter();
  const { asPath, locale } = router;
  const t = useTranslations('Navigation');

  return (
    <div className="bg-gray500 text-gray100 hidden lg:block">
      <div className="flex justify-between app-max-width">
        <ul className={`flex ${styles.topLeftMenu}`}>
          <li>
            <a href="#" aria-label="Haru Fashion Facebook Page">
              <FacebookLogo />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Haru Fashion Instagram Account">
              <InstagramLogo />
            </a>
          </li>
          <li>
            <a href="#">{t('about_us')}</a>
          </li>
          <li>
            <a href="#">{t('our_policy')}</a>
          </li>
        </ul>
        <ul className={`flex ${styles.topRightMenu}`}>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
