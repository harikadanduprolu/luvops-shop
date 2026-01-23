import { Link } from "react-router-dom";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const CategoryCard = ({ id, name, description, image }: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${id}`}
      className="group block animate-fade-up"
    >
      <article className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-1">
        {/* Background Image */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm text-primary-foreground/80">
            {description}
          </p>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </article>
    </Link>
  );
};

export default CategoryCard;
