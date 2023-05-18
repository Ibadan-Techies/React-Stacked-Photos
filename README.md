# React Stacked Photos

**React Stacked Photos** is a very light React component that harnesses the power of CSS to create a stacked photo/carousel experience. React Stacked Photos does its thing and leaves the way for you to make your magic.

## Demo

![stackedcarousel](https://github.com/Ibadan-Techies/React-Stacked-Carousel/assets/51183064/21ddc271-2bf9-4f10-a021-e655be1d8df5)

Check out the demo [here]() and play around with some samples.

## Installation

If you're using `npm`, in the command prompt run:

```sh
npm install react-stack-photos --save
```

If you're using `yarn`, run:

```sh
yarn add react-stack-photos
```

## Usage

To use the component, first import `ReactStackedPhotos` into your file:

```jsx
import ReactStackedPhotos from "react-stack-photos";
```

Then wrap the `<ReactStackedPhotos>` tags around any components - it must be a React Element - you'd like to see the effect on.

By default, the width and height of the ReactStackedPhotos will be zero, 0, so set the width and height on the parent ReactStackedPhotos

```jsx
<ReactStackedPhotos width={200} height={200}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</ReactStackedPhotos>
```

![stackedphotos1](https://github.com/Ibadan-Techies/React-Stacked-Carousel/assets/51183064/79187e90-09ef-4765-87dc-1790adeaba09)

Add styles to your children components as you wish

```jsx
<ReactStackedPhotos width={200} height={200}>
  <div style={{ fontSize: "7rem" }}>1</div>
  <div style={{ fontSize: "7rem" }}>2</div>
  <div style={{ fontSize: "7rem" }}>3</div>
</ReactStackedPhotos>
```

![stackedphotos2](https://github.com/Ibadan-Techies/React-Stacked-Carousel/assets/51183064/36770638-7d0c-4f52-be44-0bd223f8dd1b)

Since we would most likely be using ReactStackedPhotos with images, let's replace its children with some images.
The images used here are some random images on the web. Feel free to replace it with yours.

```jsx
<ReactStackedPhotos width={200} height={200}>
  <div>
    <img
      src="https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Photo.jpg"
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>

  <div>
    <img
      src="https://th.bing.com/th/id/R.fbb965fdc665d0bd4f8da283797a01a8?rik=lIO7W69%2flMx8MQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_fU7LdRkUMVM%2fTJTouRK_dTI%2fAAAAAAAAChM%2fO08EDbQJTwA%2fs1600%2fcute-baby-dog.jpeg&ehk=3ComR3Gf7XCD8wEKZXLMBPSkzlgxYZ7790TXto%2bJj3A%3d&risl=&pid=ImgRaw&r=0"
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
  <div>
    <img
      src="https://th.bing.com/th/id/R.8b7fad01da5367c68c467bd6948670fd?rik=KFSmp6damF3c3Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f-GOOCS9LbwP8%2fTaz7HOWknfI%2fAAAAAAAAACs%2fV7sR0wpvMKM%2fs1600%2fCute%2bPuppy%2bDog.jpg&ehk=c2CdJK42k3Sc83ZNT7zEIYYZmfyLA15lZDuWBu7FdUM%3d&risl=&pid=ImgRaw&r=0"
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
</ReactStackedPhotos>
```

![stackedphotos3](https://github.com/Ibadan-Techies/React-Stacked-Carousel/assets/51183064/293b50b5-6007-4e80-a0f0-4b37495d7fef)

**It is important to know that all ReactStackedPhotos child must be a div.** We wrapped our images in a div.

I went on to add some styles to my children component to cause those slant rotate effect that I want.

Style yours to your fit.

```js
  <div>
    <img
      src="https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Photo.jpg"
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>

  <div style={{ transform: "rotate(4deg)" }}>
    <img
      src="https://th.bing.com/th/id/R.fbb965fdc665d0bd4f8da283797a01a8?rik=lIO7W69%2flMx8MQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_fU7LdRkUMVM%2fTJTouRK_dTI%2fAAAAAAAAChM%2fO08EDbQJTwA%2fs1600%2fcute-baby-dog.jpeg&ehk=3ComR3Gf7XCD8wEKZXLMBPSkzlgxYZ7790TXto%2bJj3A%3d&risl=&pid=ImgRaw&r=0"
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
  <div style={{ transform: "rotate(-10deg)" }}>
    <img
      src="https://th.bing.com/th/id/R.8b7fad01da5367c68c467bd6948670fd?rik=KFSmp6damF3c3Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f-GOOCS9LbwP8%2fTaz7HOWknfI%2fAAAAAAAAACs%2fV7sR0wpvMKM%2fs1600%2fCute%2bPuppy%2bDog.jpg&ehk=c2CdJK42k3Sc83ZNT7zEIYYZmfyLA15lZDuWBu7FdUM%3d&risl=&pid=ImgRaw&r=0"
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
```

Also I want an hover effect. This is optional. But is something you will love.

To add an hover style to your children components, simply add the styles to a isHoveringStyles component.

```js
  <div>
    ...
  </div>
  <div
    style={{ transform: "rotate(4deg)" }}
    data-ishovering={{ transform: "rotate(2deg) translateX(30px)" }}
  >
    ...
  </div>
  <div
    style={{ transform: "rotate(-10deg)" }}
   data-ishovering={{ transform: "rotate(-5deg) translateX(-30px)" }}
  >
    ...
  </div>
```

![stackedphotos4](https://github.com/Ibadan-Techies/React-Stacked-Carousel/assets/51183064/69432859-0c00-431f-bedf-cacfef4a5ce2)

There you have it. Super simple and stressfree.

A sample file might look like this:

```jsx
import React from "react";
import MyComponent from "../components/MyComponent";
import ReactStackedCarousel from "react-stacked-photos";

const App = () => (
  <ReactStackedCarousel width={100} height={100}>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </ReactStackedCarousel>
);

export default App;
```

## Props

| Property           | Type           | Default | Description                                                                                                        |
| :----------------- | :------------- | :------ | :----------------------------------------------------------------------------------------------------------------- |
| `width`            | `number` in px | `{}`    | Used to set the width of parent of the photos or children components                                               |
| `height`           | `number` in px | `""`    | Used to set the width of parent of the photos or children component                                                |
| `data-isHovering` | `cssStyles`    | `{}`    | used to add hover effect on each child of the ReactStackedPhotos. Apply it to each child of the ReactStackedPhotos |
