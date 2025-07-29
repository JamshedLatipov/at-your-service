import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Professional {
    id: number;
    name: string;
    service: string;
    description: string;
    rating: number;
    image: string;
}

@Component({
    selector: 'app-find-master',
    templateUrl: './find-master.component.html',
    styleUrls: ['./find-master.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class FindMasterComponent implements OnInit {
    professionals: Professional[] = [
        {
            id: 1,
            name: 'Alex Bennett',
            service: 'Home Repair & Maintenance',
            description: 'Offers quick and reliable service for all your home needs.',
            rating: 4.9,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS7L4yzTR45QvETJfLfGWFoihzPouU7VH49T14zoyGD4a6dm6grSKNy_MtxQAl3_1CNkfdeoGSpCT0MCna_Ew9kQu8RAXZyv49NdlrLLkhh7juevyJgMiEjT1uum7RDN9xW_p7eP9ZWJVL2VQ5mvQls31JWXziogIK3vgsnfOksUD8q0IV7NtPR1RlZsl9ejb427HltLOaCX4DKo3h_dXv_LBTYcXruWEFtZEj37KjCzKVlKwAkVQDtjV4DJnEtWCSp2eMBW6MYg'
        },
        {
            id: 2,
            name: 'Sophia Clark',
            service: 'Plumbing & Electrical',
            description: 'Known for meticulous attention to detail and professional work.',
            rating: 4.8,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_8-2tIhzrdwbq0b9QOIatd2_dOQlCz6p3UNPPY0V2gFVLTQECO80Yx9VBtfI-fGYJQSGRpeDdAuvHMqKCTFu1r3M-lopWEYQ0MWsDnkpdT6oTRTWyL3HuSC82SX8EviF5hMdXZh1H_Wm9FLEeAAqqmWp223iQuPXEXPH70BREHGVRqv6hoZXsMAg-4sgXL9Cnv2y3US3c5FFQQYXMX-FT0jCLV2cD80JgJTP6RpiaPzKN2-rBY-j6HpT8Xnz657xzwV-MqCaEAA'
        },
        {
            id: 3,
            name: 'Ethan Davis',
            service: 'Landscaping & Gardening',
            description: 'Creates beautiful and sustainable outdoor living spaces.',
            rating: 4.7,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPStXqxkHobPn0jlQm0z2UjzR7VoUfFJREYxc-vNW8HRf50nkKFGxf2X5RFbjPCe5qdBPj4e6Rw96ejgBjiXzJaB0juUza7zJpXY4hq9TD4iW00j4sDLa5zt6XB8R7HPqdBGjNwWy2bPIOeJVo_7tcP_J2a_rNNZxHmRv_Y0eIP-9SvDy0lrQcMIsgO3ZbwD6qsA64nhNNlbY83nUGAEu4VuLQCb7uhDaohyj5mVCKJ97aOm2BZfEkob206biltjSyyPqPu3dkcA'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }
}