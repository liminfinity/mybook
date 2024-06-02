import { IImageProps } from "./image.props";
import styles from "./image.module.scss";

export default function Image({ className = "", ...props }: IImageProps) {
	return <img className={[styles.default, className].join(" ")} {...props} />;
}
