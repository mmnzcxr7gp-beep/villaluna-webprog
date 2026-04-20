import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-love-500 text-white hover:bg-love-600',
  secondary: 'bg-love-100 text-love-900 hover:bg-love-200 border-love-300',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
