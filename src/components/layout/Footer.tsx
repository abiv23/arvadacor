import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cor-navy text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Men's Groups Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Men's Groups</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://kofc12392.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cor-gold transition duration-200"
                >
                  Knights of Columbus
                </Link>
              </li>
              <li>
                <Link
                  href="https://paradisusdei.org/that-man-is-you/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cor-gold transition duration-200"
                >
                  That Man is You
                </Link>
              </li>
              <li>
                <Link
                  href="https://app.exodus90.com/j/WUJLKAG-NTQGYAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cor-gold transition duration-200"
                >
                  Exodus 90
                </Link>
              </li>
            </ul>
          </div>

          {/* St. Joan of Arc Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">St. Joan of Arc</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.stjoanarvada.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cor-gold transition duration-200"
                >
                  Parish website
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/stjoanarvada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cor-gold transition duration-200"
                >
                  Parish Facebook
                </Link>
              </li>
            </ul>
          </div>

          {/* Prayers Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Prayers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.usccb.org/prayers/litany-saint-joseph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cor-gold transition duration-200"
                >
                  Litany of St. Joseph
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.ewtn.com/catholicism/devotions/litany-of-humility-245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cor-gold transition duration-200"
                >
                  Litany of Humility
                </Link>
              </li>
              <li>
                <Link
                  href="/images/4772-guide-to-rosary.pdf"
                  target="_blank"
                  className="hover:text-cor-gold transition duration-200"
                >
                  How to Pray the Rosary
                </Link>
              </li>
              <li>
                <Link
                  href="/images/Home/KnightsPrayerMobile.png"
                  target="_blank"
                  className="hover:text-cor-gold transition duration-200"
                >
                  Knight&apos;s Prayer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cor-blue/30 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Arvada Cor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
