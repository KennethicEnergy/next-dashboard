import Card from '@/components/card/card'
import React from 'react';
import styles from './property.module.scss';

const Property = () => {
  return (
    <div className={styles.property}>
      <Card
        title="LOREM IPSUM DOLOR"
        img="/assets/small-house-design-2012003-perspective-1.jpg"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore est consequatur ducimus dolorum ratione dolorem, ipsam totam dolor ."
      />
      <Card
        title="LOREM IPSUM DOLOR"
        img="/assets/small-house-design-2012003-perspective-1.jpg"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore est consequatur ducimus dolorum ratione dolorem, ipsam totam dolor ."
      />
      <Card
        title="LOREM IPSUM DOLOR"
        img="/assets/small-house-design-2012003-perspective-1.jpg"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore est consequatur ducimus dolorum ratione dolorem, ipsam totam dolor ."
      />
      <Card
        title="LOREM IPSUM DOLOR"
        img="/assets/small-house-design-2012003-perspective-1.jpg"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore est consequatur ducimus dolorum ratione dolorem, ipsam totam dolor ."
      />
      <Card
        title="LOREM IPSUM DOLOR"
        img="/assets/small-house-design-2012003-perspective-1.jpg"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore est consequatur ducimus dolorum ratione dolorem, ipsam totam dolor ."
      />
    </div>
  )
}

export default Property