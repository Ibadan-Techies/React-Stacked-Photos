# React Stacked Carousel

**React Stacked Carousel** is a very light React component that harnesses the power of CSS to create a stacked photo/carousel experience. React Stacked Carousel does its thing and leaves the way for you to make your magic

## Demo

Check out the demo [here]() and play around with some samples.

## Installation

If you're using `npm`, in the command prompt run:

```sh
npm install react-stack-carousel --save
```

If you're using `yarn`, run:

```sh
yarn add react-stack-carousel
```

## Usage

To use the component, first import `ReactStackedCarousel` into your file:

```jsx
import ReactStackedCarousel from "react-stack-carousel";
```

Then wrap the `<ReactStackedCarousel>` tags around any components - it must be a React Element - you'd like to see the effect on.

```jsx
<ReactStackedCarousel width={200} height={200}>
  <div
    isHovering={{ transform: "rotate(5deg) translateX(30px)" }}
    default={{ transform: "rotate(5deg)" }}
  >
    <div className="flex">
      <img
        src="https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Photo.jpg"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div className="lk">Karl Droggos</div>
    </div>
  </div>
  <div
    isHovering={{ transform: "rotate(-5deg) translateX(-30px)" }}
    default={{ transform: "rotate(-5deg)" }}
  >
    <img
      src="https://th.bing.com/th/id/R.fbb965fdc665d0bd4f8da283797a01a8?rik=lIO7W69%2flMx8MQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_fU7LdRkUMVM%2fTJTouRK_dTI%2fAAAAAAAAChM%2fO08EDbQJTwA%2fs1600%2fcute-baby-dog.jpeg&ehk=3ComR3Gf7XCD8wEKZXLMBPSkzlgxYZ7790TXto%2bJj3A%3d&risl=&pid=ImgRaw&r=0"
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
</ReactStackedCarousel>
```

A sample file might look like this:

```jsx
import React from "react";
import MyComponent from "../components/MyComponent";
import ReactStackedCarousel from "react-stacked-carousel";

const App = () => (
  <ReactStackedCarousel>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </ReactStackedCarousel>
);

export default App;
```

## Props

| Property     | Type           | Default | Description                                                |
| :----------- | :------------- | :------ | :--------------------------------------------------------- |
| `width`      | `number` in px | `{}`    | Used to set the width of parent of the photos or component |
| `height`     | `number` in px | `""`    | Used to set the width of parent of the photos or component |
| `isHovering` | `cssStyles`    | `{}`    | used to add hover effect on each child                     |
| `default`    | `cssStyles`    | `{}`    | used to add default effect on each child                   |
