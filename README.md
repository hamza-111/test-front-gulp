# Documentation du Projet


## Petite documentation

1. **Mecanique de typo :**

   ```scss
   // Mixin typographie
    @mixin typo(
    $font-size: $default-font-size,
    $font-family: $default-font-family,
    $line-height: $default-line-height,
    $font-weight: $default-font-weight
    ) {
    font-size: $font-size;
    font-family: $font-family;
    line-height: $line-height;
    font-weight: $font-weight;
    }

    .base-text {
        @include typo(); // Utilise les valeurs par défaut définies dans les variables SCSS
    }

    .custom {
        @include typo(
            $font-size: 24px,
            $font-family: 'Arial', sans-serif,
            $line-height: 1.5,
            $font-weight: 700
        );
    }
    .custom-limited {
        
        @include typo(
            $line-height: 1.5,
            $font-weight: 700
        );
    }

2. **Mecanique de break point :**

   ```scss
   //les break point disponible
        $breakpoint-xs: 480px;
        $breakpoint-sm: 768px;
        $breakpoint-md: 1024px;
        $breakpoint-lg: 1200px;
        $breakpoint-xl: 1400px;

    // Exemple d'utilisation
        .container {
            @include respond-to(sm) {
                flex-direction: column;
                //pour les versions mobile
            }
        }

3. **Schema :**

J'ai rajouter le dossier atom sous le dossier components pour diffirencier ce qui est atom de ce qui est composant