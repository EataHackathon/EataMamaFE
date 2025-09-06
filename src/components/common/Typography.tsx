import styled from '@emotion/styled';

type TypographyVariant = 'title' | 'subtitle' | 'body1' | 'body2' | 'label';
type TypographyWeight = 'regular' | 'medium' | 'bold';
type TypographyColor = 'default' | 'sub' | 'white';

type TypographyProps = {
  variant: TypographyVariant;
  weight: TypographyWeight;
  color?: TypographyColor;
  children: React.ReactNode;
  as?: React.ElementType;
};

const Typography = ({
  variant,
  weight,
  children,
  color = 'default',
  as = 'p',
}: TypographyProps) => {
  return (
    <StyledTypography as={as} variant={variant} weight={weight} color={color}>
      {children}
    </StyledTypography>
  );
};

export default Typography;

const StyledTypography = styled('p', {
  shouldForwardProp: (prop) =>
    prop !== 'variant' && prop !== 'weight' && prop !== 'color',
})<{
  variant: TypographyVariant;
  weight: TypographyWeight;
  color: TypographyColor;
}>`
  font-size: ${({ theme, variant }) => theme.typography[variant].fontSize};
  line-height: ${({ theme, variant }) => theme.typography[variant].lineHeight};
  font-weight: ${({ theme, weight }) => theme.typography.fontWeight[weight]};
  color: ${({ theme, color }) => theme.colors.text[color]};
`;
