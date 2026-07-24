import clsx from "clsx";
import styles from "./styles.module.css";

// Segmented control to pick which CPU architecture's downloads are shown.
// Always rendered, even with a single option, so the user can see which
// architecture the download links point to.
export default function ArchSwitcher({ options, value, onChange, className }) {
  return (
    <div
      className={clsx(styles.switcher, className)}
      role="tablist"
      aria-label="Architecture"
    >
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          role="tab"
          aria-selected={option.key === value}
          className={clsx(
            styles.option,
            option.key === value && styles.optionActive,
          )}
          onClick={() => onChange(option.key)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
