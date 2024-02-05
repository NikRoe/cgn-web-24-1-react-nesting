import Button from './Button';

export default function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {description}
      <Button>Adopt {name}</Button>
    </>
  );
}
