import React from "react";
import { CoursePageComponentProps } from "./course-page-component.props";
import styles from "./course-page-component..module.css";
import cn from "classnames";
import {
  Advantages,
  Heading,
  HhData,
  Product,
  Sort,
  Tag,
  Text,
} from "../../components";

const CoursePageComponent = ({
  firstCategory,
  page,
  products,
}: CoursePageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {/* Title */}
      <div className={styles.title}>
        <Heading tag="h1">{page.title}</Heading>
        <Sort />
      </div>

      {/* Products */}
      <div>
        {products && products.map((c) => <Product key={c._id} product={c} />)}
      </div>

      {/* Vacations */}
      <div className={styles.hhTitle}>
        <Heading tag="h2">Vacation - {page.category}</Heading>
        <Tag color="red" size="m">
          hh.uz
        </Tag>
      </div>

      {/* HH data */}
      {page.hh && <HhData {...page.hh} />}

      {/* Advantages */}
      {page.advantages && page.advantages.length && (
        <>
          <Heading tag="h2">Advantages</Heading>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {/* Descriptions */}
      <Text size="m">{page.description}</Text>

      {/* Skills */}
      <Heading tag="h2">Skills</Heading>
      {page.tags.length &&
        page.tags.map((t) => (
          <Tag color="primary" key={t}>
            {t}
          </Tag>
        ))}
    </div>
  );
};

export default CoursePageComponent;
