import React from "react";
import { CoursePageComponentProps } from "./course-page-component.props";
import styles from "./course-page-component..module.css";
import cn from "classnames";
import { Heading, Tag } from "../../components";

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
        <div>Sort...</div>
      </div>

      {/* Products */}
      <div>Product</div>

      {/* Vacations */}
      <div className={styles.hhTitle}>
        <Heading tag="h2">Vacation - {page.category}</Heading>
        <Tag color="red" size="m">
          hh.uz
        </Tag>
      </div>

      {/* HH data */}
      <div>HH Data</div>
    </div>
  );
};

export default CoursePageComponent;
