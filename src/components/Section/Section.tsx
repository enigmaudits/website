import clsx from 'classnames';

import './Section.css';

type SectionProps = {
    id?: string;
    className?: string;
    children: any;
    lg?: boolean;
    white?: boolean;
}

const Section: React.FC<SectionProps> = ({id, className, lg, white, children}) => (
    <section id={id} className={clsx("section", className, {"section-lg": lg, "section-white": white})}>
        {children}
    </section>
);

export default Section;