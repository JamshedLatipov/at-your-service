import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false
})
export class TranslatePipe implements PipeTransform {
    constructor(private translationService: TranslationService) { }

    transform(key: string): Observable<string> {
        return this.translationService.getTranslations().pipe(
            map(translations => {
                const keys = key.split('.');
                let value: any = translations;
                for (const k of keys) {
                    if (value && typeof value === 'object') {
                        value = value[k];
                    } else {
                        return key;
                    }
                }
                return typeof value === 'string' ? value : (value?.toString() || key);
            })
        );
    }
}