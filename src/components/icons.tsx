import {
  IconParking,
  IconProps,
  IconBrandGithub,
  IconBrandGoogleFilled,
  IconEyeClosed,
  IconEye,
  IconSearch,
  IconLogout,
  IconLoader2,
} from "@tabler/icons-react";

export const Icons = {
  logo: (props: IconProps) => <IconParking {...props} />,
  github: (props: IconProps) => <IconBrandGithub {...props} />,
  google: (props: IconProps) => <IconBrandGoogleFilled {...props} />,
  eyeClose: (props: IconProps) => <IconEyeClosed {...props} />,
  eyeOpen: (props: IconProps) => <IconEye {...props} />,
  search: (props: IconProps) => <IconSearch {...props} />,
  logout: (props: IconProps) => <IconLogout {...props} />,
  loading: (props: IconProps) => <IconLoader2 {...props} />,
};
