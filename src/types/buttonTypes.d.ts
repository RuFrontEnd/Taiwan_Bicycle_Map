interface Props {
  className: any;
  style: any;
  children: any;
  infos: Infos;
}

interface Infos {
  selected: Boolean;
}

interface Wrap {
  selected: Boolean;
}

const buttonTypes = { ButtonProps, Infos, WrapProps };

export default buttonTypes;
