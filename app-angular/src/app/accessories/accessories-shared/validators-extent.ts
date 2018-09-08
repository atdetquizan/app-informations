export class ValidatorsExtent {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: '* Campo requerido.',
      minlength: `La longitud mínima (${validatorValue.requiredLength} caracteres)`,
      maxlength: `Excede longitud máxima (${validatorValue.requiredLength} caracteres)`,
      max: `Excede el valor maximo a ${validatorValue.max}`,
      min: `El valor minimo es de ${validatorValue.min}`
    };
    return config[validatorName];
  }
}
