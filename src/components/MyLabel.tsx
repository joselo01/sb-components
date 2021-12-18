import './mylabel.css';

export interface MyLabelProps {
    /**
   * Es el nombre por defecto de la etiqueta
   */
    label: string;
    /**
   * Es el tamaño por defecto de la etiqueta
   */
    size: 'normal'|'h1'|'h2'|'h3';
     
    
    /**
   * Texto capitalizado true
   */
    allCaps?: boolean;

     /**
   * Colores basicos del boton
    */

    color?: 'primary' | 'secondary' | 'tertiary'


      /**
   * Color prsonalizado de la fuente
    */

    fontColor?: string;
}

export const MyLabel = ({
    label   = 'No Label',
    size    = 'normal',
    allCaps = false,
    color   = 'primary',
    fontColor
}: MyLabelProps) => {
    return (
        <span className={ `label ${ size } text-${ color }` }
        style={{ color: fontColor }}>
        { allCaps ? label.toUpperCase() : label}
        </span>
    )
}
