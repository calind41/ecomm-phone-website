export const infoTitles = {
    General: {
        dual_sim: 'Dual Sim:',
        retea_2g: 'Retea (MHz) 2G:',
        retea_3g: 'Retea (MHz) 3G:',
        gps: 'GPS:',
        rezistenta: 'Rezistenta:',
        altele: 'Altele:',
        culoare: 'Culoare:',
        tip_telefon: 'Tip Telefon:'
    },
    Display: {
        dim_display_inch: 'Dimensiune Display (inches):',
        rezolutie_px: 'Rezolutie (pixeli):',
        culori: 'Culori:',
        tip_display: 'Tip display:',
        tehnologie_display: 'Tehnologie display:',
        caracteristici: 'Caracteristici:'
    },
    Dimensiuni: {
        dim_w_d_h_mm: 'Dimensiuni (W x D x H mm):',
        greutate_g: 'Greutate (g):'
    },
    Memorie: {
        slot_mem: 'Slot memorie:',
        capacitate_gb: 'Capacitate (GB):',
        mem_ram: 'Memorie RAM:'
    },
    Procesor: {
        nr_nucleu_proc: 'Numar nuclee procesor:',
        chipset: 'Chipset:',
        cpu: 'CPU:',
        gpu: 'GPU:',
        frecv_proc_ghz: 'Frecventa procesor (GHz):'
    },
    Functii: {
        so_tip: 'Sistem de operare:',
        so_versiune: 'Versiune sistem de operare:',
        camera: 'Camera:',
        functii: 'Functii:',
        senzor: 'Senzor:',
        audio: 'Audio:',
        camera_foto: 'Camera foto:'
    },
    Conectivitate: {
        retea_3g: 'Retea 2G:',
        retea_4g: 'Retea 3G:',
        tehnologie_wirless: 'Tehnologie wireless:',
        bluetooth: 'Bluetooth:',
        wlan: 'WLAN:',
        gprs: 'GPRS:',
        edge: 'EDGE',
        nfc: 'NFC',
        usb: 'USB',
        porturi: 'Porturi:',
        tehnologie: 'Tehnologie:'
    },
    Baterie: {
        tip_baterie: 'Tip baterie:',
        baterie: 'Baterie:'
    }
}

export const storeProducts = [
  {
    id: 1,
    title: 'ASUS ROG Phone 2 ZS660KL 512GB Dual SIM 4G Black',
    img: '../img_phones/asus/id1/pic1.jpg',
    price: 4199,
    company: 'Asus',
    info: {
        General: {

                dual_sim: 'Da',
                retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
                retea_3g: `HSDPA 850 / 900 / 1900 / 2100`,
                gps: 'GPS',
                rezistenta: 'Apa sau praf ( certificat IP68 )',
                altele: `Dual SIM (Nano-SIM, dual stand-by)
      Fast battery charging 30W (Quick Charge 4.0)
      Front glass (Gorilla Glass 6), back glass, aluminum frame
      Power bank/Reverse charging 10W`,
                culoare: 'Negru',
                tip_telefon: 'Smartphone'
        },
        Display: {
                dim_display_inch: 6.59,
                rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~391 ppi density)',
                culori: '16M',
                tip_display: 'AMOLED',
                tehnologie_display: 'AMOLED capacitive touchscreen, 16M colors',
                caracteristici: `120 Hz
                                240 Hz touch-sensing
                                6.59 inches, 106.6 cm2 (~80.3% screen-to-body ratio)
                                DCI-P3 108%
                                HDR10`

        },
        Dimensiuni: {
            dim_w_d_h_mm: '171 x 77.6 x 9.5 mm',
            greutate_g: '240g'
        },
        Memorie: {
            slot_mem: 'Fara slot',
            capacitate_gb: '512GB',
            mem_ram: '12GB'
        },
        Procesor: {
            nr_nucleu_proc: 'Octa Core',
            chipset: 'Qualcomm SDM855 Snapdragon 855+ (7 nm)',
            cpu: 'Octa-core (1x2.96 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)',
            gpu: 'Adreno 640 (700 MHz)',
            frecv_proc_ghz:  ` 1.78
            2.42
            2.96`
        },
        Functii: {
            so_tip: 'Android',
            so_versiune: 'Android 9.0 (Pie), ROG UI',
            camera: '24MP, f/2.2, 0.9µm',
            functii: `LED flash, HDR, panorama`,
            senzor:	'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass',
            audio: `24-bit/192kHz audio
            Active noise cancellation with dedicated mics
            DTS Headphone X
            Difuzoare stereo 2 amplificatoare dedicate`,
            camera_foto: `13
                            48`
        },
        Conectivitate: {
            tehnologie_wirless: 'Wi Fi',
            bluetooth: '5.0, A2DP, LE, aptX HD',
            wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ad, dual-band, Wi-Fi Direct, hotspot',
            gprs: 'Da',
            edge: 'Da',
            nfc: 'Cu NFC',
            usb: '3.1, Type-C 1.0 reversible connector; accessory connector',
            porturi: 'Jack 3.5 mm',
            tehnologie:	` 2G
                        3G
                        4G
                        GPS
                        NFC`,
        },
        Baterie: {
            tip_baterie: 'Non-removable Li-Po 6000 mAh battery',
            baterie: 6000
        }
    },
    inCart: false,
     inFavorites: false,
    count: 0,
    total: 0
},

{
    id: 2,
    title: 'ASUS ZenFone AR ZS571KL 128GB Dual Sim 4G Black',
    img: '../img_phones/asus/id2/pic1.jpg',
    price: 3934,
    company: 'Asus',
    info: {
        General: {
                dual_sim: 'Da',
                retea_2g: '850 / 900 / 1800 / 1900',
                retea_3g: `850 / 900 / 1900 / 2100`,
                retea_4g: 'LTE band 1(2100), 3(1800), 5(850), 7(2600), 8(900), 18(800), 19(800), 20(800), 26(850), 28(700), 38(2600), 40(2300), 41(2500)',
                gps: 'GPS',
                rezistenta: 'Apa sau praf ( certificat IP68 )',
                culoare: 'Negru,,',
                tip_telefon: 'Smartphone'
        },
        Display: {
                dim_display_inch: 5.7,
                rezolutie_px: '1440 x 2560 pixeli',
                culori: '16M',
                tip_display: 'Touchscreen Capacitiv',
                tehnologie_display: `Corning Gorilla Glass 4
                Super AMOLED`

        },
        Dimensiuni: {
            dim_w_d_h_mm: '158.7 x 77.7 x 9mm',
            greutate_g: '170g'
        },
        Memorie: {
            slot_mem: 'microSD, pana la 2TB',
            capacitate_gb: '128GB',
            mem_ram: '6GB'
        },
        Procesor: {
            nr_nucleu_proc: 'Quad Core',
            chipset: 'Qualcomm Snapdragon 821',
            cpu: '64-bit Qualcomm Quad-Core Processor Snapdragonâ„¢ 821 @2.35GHz, optimized for Tango',
            gpu: 'Adreno 530',
            frecv_proc_ghz: `2.35`
        },
        Functii: {
            so_tip: 'Android',
            so_versiune: 'v7.0 (Nougat)',
            camera: '8MP',
            functii: `Autofocus
        Geotagging
                HDR (High Dynamic Range)
                LED Flash
                Panorama
                Recunoastere faciala
                Stabilizator imagine: Optic
                Touch focus`,
            senzor:	`Accelerometru
                    Amprenta
                    Barometru
                    Busola
                    Giroscop
                    Lumina
                    Proximitate`,
            audio: `Difuzor`,
            camera_foto: `23`
        },
        Conectivitate: {
            retea_3g: 'HSDPA, 42.2 Mbps; HSUPA, 5.76 Mbps',
            retea_4g: 'LTE, Cat12, 75 Mbps UL, 600 Mbps DL',
            tehnologie_wirless: 'Wi Fi',
            bluetooth: 'v4.2 cu A2DP, LE',
            wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, Wi-Fi hotspot',
            gprs: 'Da',
            edge: 'Da',
            NFC: 'Cu NFC',
            USB: 'v2.0, Type-C 1.0 conector reversibil',
            porturi: 'Jack 3.5mm',
            tehnologie:	`3G
                        4G
                        GPS`
        },
        Baterie: {
            tip_baterie: `PowerDelivery 2.0
                    Quick Charge 3.0
                    Standard Li-Ion`,
            Baterie: 3300
        }
    },
    inCart: false,
     inFavorites: false,
    count: 0,
    total: 0
},
    
{
    id: 3,
    title:  'ASUS ROG Phone 2 ZS660KL 128GB Dual SIM 4G Black',
    img: '../img_phones/asus/id3/pic1.jpg',
    price: 3299,
    company: 'Asus',
    info: {
        General: {

                dual_sim: 'Da',
                retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
                retea_3g: 'HSDPA 850 / 900 / 1900 / 2100',
                gps: 'GPS',
                rezistenta: 'Apa sau praf ( certificat IP68 )',
                altele: `Dual SIM (Nano-SIM, dual stand-by)
                        Fast battery charging 30W (Quick Charge 4.0)
                        Front glass (Gorilla Glass 6), back glass, aluminum frame
                        Power bank/Reverse charging 10W`,
                culoare: 'Negru',
                tip_telefon: 'Smartphone'
        },
        Display: {
                dim_display_inch:  6.59,
                rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~391 ppi density)',
                culori: '16M',
                tip_display: 'AMOLED',
                tehnologie_display: 'AMOLED capacitive touchscreen, 16M colors',
                caracteristici: `120 Hz
                240 Hz touch-sensing
                6.59 inches, 106.6 cm2 (~80.3% screen-to-body ratio)
                DCI-P3 108%
                HDR10`

        },
        Dimensiuni: {
            dim_w_d_h_mm: '171 x 77.6 x 9.5mm',
            greutate_g: '240g'
        },
        Memorie: {
            slot_mem: 'Fara slot',
            capacitate_gb: '128GB',
            mem_ram: '8GB'
        },
        Procesor: {
            nr_nucleu_proc: 'Octa Core',
            chipset: 'Qualcomm SDM855 Snapdragon 855+ (7 nm)',
            cpu: 'Octa-core (1x2.96 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)',
            gpu: 'Adreno 640 (700 MHz)',
            frecv_proc_ghz: `1.78
                            2.42
                            2.96`
        },
        Functii: {
            so_tip: 'Android,',
            so_versiune: 'Android 9.0 (Pie), ROG UI',
            camera: '24MP, f/2.2, 0.9µm',
            functii: 'LED flash, HDR, panorama',
            senzor:	`Fingerprint (under display, optical), accelerometer, gyro, proximity, compass`,
            audio: `24-bit/192kHz audio
                    Active noise cancellation with dedicated mics
                    DTS Headphone X
                    Difuzoare stereo 2 amplificatoare dedicate`,
            camera_foto: `13
                        48`
        },
        Conectivitate: {
            tehnologie_wirless: 'Wi Fi',
            bluetooth: '5.0, A2DP, LE, aptX HD',
            wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ad, dual-band, Wi-Fi Direct, hotspot',
            gprs: 'Da',
            edge: 'Da',
            nfc: 'Cu NFC',
            usb: '3.1, Type-C 1.0 reversible connector; accessory connector',
            porturi: 'Jack 3.5 mm',
            tehnologie:	`2G
                        3G
                        4G
                        GPS
                        NFC`
        },
        Baterie: {
            tip_baterie: 'Non-removable Li-Po 6000 mAh battery',
            Baterie: 6000
        }
    },
    inCart: false,
    inFavorites: false,
    count: 0,
    total: 0
},

{
    id: 4,
    title: 'ASUS Zenfone 6 ZS630KL 256GB Dual SIM 4G Black',
    img: '../img_phones/asus/id4/pic1.jpg',
    price: 2799,
    company: 'Asus',
    info: {
        General: {
                dual_sim: 'Da',
                retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
                retea_3g: 'HSDPA 850 / 900 / 1900 / 2100',
                gps: 'GPS',
                altele: `Fast battery charging 18W (Quick Charge 4.0)
                        Front glass (Gorilla Glass 6), back glass (Gorilla Glass), aluminum frame
                        Power bank/Reverse charging 10W`,
                culoare: 'Negru',
                tip_telefon: 'Smartphone'
        },
        Display: {
                dim_display_inch: 6.4,
                rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)',
                culori: '16M',
                tip_display: 'Touchscreen Capacitiv',
                tehnologie_display: 'IPS LCD capacitive touchscreen, 16M colors',
                caracteristici: `Corning Gorilla Glass 6
                                DCI-P3 100%
                                HDR10`
        },
        Dimensiuni: {
            dim_w_d_h_mm: '159.1 x 75.4 x 9.2mm',
            greutate_g: '190g'
        },
        Memorie: {
            slot_mem: 'microSD, up to 1 TB (dedicated slot)',
            capacitate_gb: '256GB',
            mem_ram: '8GB'
        },
        Procesor: {
            nr_nucleu_proc: 'Octa Core',
            chipset: 'Qualcomm SDM855 Snapdragon 855 (7 nm)',
            cpu: 'Octa-core (1x2.96 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)',
            gpu: 'Adreno 640',
            frecv_proc_ghz: `1.78
                            2.42
                            2.84`
        },
        Functii: {
            so_tip: 'Android',
            so_versiune: 'Android 9.0 (Pie), ZenUI 6',
            camera: `13 MP, f/2.4, 11mm (ultrawide)
                    48 MP, f/1.8, 26mm (wide), 1/2", 0.8µm, PDAF, Laser AF`,
            functii: 'Dual-LED flash, HDR, auto panorama (motorized rotation)',
            senzor:	'Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass',
            audio: `24-bit/192kHz audio
                    Active noise cancellation with dedicated mic
                    DTS Headphone X`,
            camera_foto: `13
                            48`
        },
        Conectivitate: {
            tehnologie_wirless: 'Wi Fi',
            bluetooth: '5.0, A2DP, LE, aptX HD',
            wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ad, dual-band, Wi-Fi Direct, hotspot',
            gprs: 'Da',
            edge: 'Da',
            nfc: 'Cu NFC',
            usb: '3.1, Type-C 1.0 reversible connector; accessory connector',
            porturi: 'Jack 3.5mm',
            tehnologie:	`2G
                        3G
                        4G
                        GPS
                        NFC`
        },
        Baterie: {
            tip_baterie: 'Non-removable Li-Po 5000 mAh battery',
            baterie: 5000
        }
    },
    inCart: false,
     inFavorites: false,
    count: 0,
    total: 0
},

{
    id: 5,
    title: 'ASUS Zenfone 6 ZS630KL 128GB Dual SIM 4G Silver',
    img: '../img_phones/asus/id5/pic1.jpg',
    price: 2699,
    company: 'Asus',
    info: {
        General: {
                dual_sim: 'Da',
                retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
                retea_3g: `HSDPA 850 / 900 / 1900 / 2100`,
                retea_4g: 'LTE',
                gps: 'GPS',
                altele: `Fast battery charging 18W (Quick Charge 4.0)
                        Front glass (Gorilla Glass 6), back glass (Gorilla Glass), aluminum frame
                        Power bank/Reverse charging 10W`,
                culoare: 'Silver',
                tip_telefon: 'Smartphone'
        },
        Display: {
                dim_display_inch: 6.4,
                rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)',
                culori: '16M',
                tip_display: 'Touchscreen Capacitiv',
                tehnologie_display: 'IPS LCD capacitive touchscreen, 16M colors',
                caracteristici: `Corning Gorilla Glass 6
                DCI-P3 100%
                HDR10`
        },
        Dimensiuni: {
            dim_w_d_h_mm: '159.1 x 75.4 x 9.2mm',
            greutate_g: '190g'
        },
        Memorie: {
            slot_mem: 'microSD, up to 1 TB (dedicated slot)',
            capacitate_gb: '128GB',
            mem_ram: '6GB'
        },
        Procesor: {
            nr_nucleu_proc: 'Octa Core',
            chipset: 'Qualcomm SDM855 Snapdragon 855 (7 nm)',
            cpu: 'Octa-core (1x2.96 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)',
            gpu: 'Adreno 640',
            frecv_proc_ghz: `1.78
                            2.42
                            2.84`
        },
        Functii: {
            so_tip: 'Android',
            so_versiune: 'Android 9.0 (Pie), ZenUI 6',
            camera: `13 MP, f/2.4, 11mm (ultrawide)
                    48 MP, f/1.8, 26mm (wide), 1/2", 0.8µm, PDAF, Laser AF`,
            functii: 'Dual-LED flash, HDR, auto panorama (motorized rotation)',
            senzor:	'Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass',
            audio: `24-bit/192kHz audio
                    Active noise cancellation with dedicated mic
                    DTS Headphone X`,
            camera_foto: ` 13
                            48`,
        },
        Conectivitate: {
            tehnologie_wirless: 'Wi Fi',
            bluetooth: '5.0, A2DP, LE, EDR, aptX HD',
            wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, WiFi Direct, hotspot',
            nfc: 'Cu NFC',
            usb: '2.0, Type-C 1.0 reversible connector',
            tehnologie:	`2G
            3G
            4G
            GPS
            NFC`
        },
        Baterie: {
            tip_baterie: 'Non-removable Li-Po 5000 mAh battery',
            baterie: 5000
        }
    },
    inCart: false,
     inFavorites: false,
    count: 0,
    total: 0
},

{
    id: 6,
    title: 'ASUS ZenFone 5Z ZS620KL 256GB Dual Sim 4G Midnight Blue',
    img: '../img_phones/asus/id6/pic1.jpg',
    price: 2454,
    company: 'Asus',
    info: {
        General: {
                dual_sim: 'Da',
                retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
                retea_3g: 'HSDPA 850 / 900 / 1900 / 2100',
                gps: 'GPS',
                altele: `Dual SIM (Nano-SIM, dual stand-by)`,
                culoare: 'Albastru',
                tip_telefon: 'Smartphone'
        },
        Display: {
                dim_display_inch: 6.2,
                rezolutie_px: '1080 x 2246 pixels, 18.7:9 ratio (~402 ppi density)',
                culori: '16M',
                tip_display: 'Touchscreen Capacitiv',
                tehnologie_display: 'IPS LCD capacitive touchscreen, 16M colors',
                caracteristici: `95% DCI-P3 coverage
                                ASUS ZenUI 5.0
                                Corning Gorilla Glass (unspecified version)
                                Multitouch`
        },
        Dimensiuni: {
            dim_w_d_h_mm: '153 x 75.7 x 7.9mm',
            greutate_g: '155g'
        },
        Memorie: {
            slot_mem: 'microSD, up to 512 GB (uses SIM 2 slot)',
            capacitate_gb: '256GB',
            mem_ram: '8GB'
        },
        Procesor: {
            nr_nucleu_proc: 'Octa Core',
            chipset: 'Qualcomm SDM845 Snapdragon 845',
            cpu: 'Octa-core (4x2.7 GHz Kryo 385 Gold & 4x1.7 GHz Kryo 385 Silver)',
            gpu: 'Adreno 630',
            frecv_proc_ghz: `1.7
            2.7`
        },
        Functii: {
            so_tip: 'Android',
            so_versiune: 'Android 8.0 (Oreo)',
            senzor:	`Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass`,	
            audio: `24-bit/192kHz audio
    Active noise cancellation with dedicated mic
    DTS Headphone X
    Difuzor`,
            camera: '8 MP (f/2.0, 24mm, 1/4", 1.12µm), gyro EIS, 1080p',
            functii: `Geo-tagging, touch focus, face detection, HDR, panorama`,
            camera_foto: `12
            8`
        },
        Conectivitate: {
            retea_3g: 'HSPA 42.2/5.76 Mbps',
            retea_4g: 'LTE-A (5CA) Cat18 1200/100 Mbps',
            tehnologie_wirless: 'Wi Fi',
            bluetooth: 'v5.0, A2DP, LE',
            wlan: '802.11 a/b/g/n/ac, WiFi Direct, hotspot',
            gprs: 'Da',
            edge: 'Da',
            nfc: 'Cu NFC',
            usb: '2.0, Type-C 1.0 reversible connector',
            tehnologie:	`3G
                        4G
                        GPS
                        NFC`,
        },
        Baterie: {
            tip_baterie: 'Non-removable Li-Ion 3300 mAh battery',
            baterie: 3300
        }
    },
    inCart: false,
     inFavorites: false,
    count: 0,
    total: 0
},

{
    id: 7,
    title: 'ASUS ZenFone Zoom S ZE553KL 64GB Dual Sim 4G Silver',
    img: '../img_phones/asus/id7/pic1.jpg',
    price: 1814,
    company: 'Asus',
    info: {
        General: {
                dual_sim: 'Da',
                retea_2g: 'GSM 850 / 900 / 1800 / 1900 MHz',
                retea_3g: `HSDPA 850 / 900 / 1900 / 2100`,
                retea_4g: 'LTE band 1(2100), 2(1900), 3(1800), 5(850), 7(2600), 8(900), 20(800)',
                altele: `Dual SIM (Nano-SIM, dual stand-by)`,
                culoare: 'Silver',
                tip_telefon: 'Smartphone'
        },
        Display: {
                dim_display_inch: 5.5,
                rezolutie_px: '1080x1920, 401ppi',
                culori: '16M',
                tip_display: 'Touchscreen Capacitiv',
                tehnologie_display: 'OLED capacitive touchscreen, 16M colors',
                caracteristici: `AMOLED
                                Gorilla Glass 5`
        },
        Dimensiuni: {
            dim_w_d_h_mm: '154.3 x 77 x 7.99mm',
            greutate_g: '170g'
        },
        Memorie: {
            slot_mem: 'MicroSD, pana la 2TB',
            capacitate_gb: '64GB',
            mem_ram: '4GB'
        },
        Procesor: {
            nr_nucleu_proc: 'Octa Core',
            chipset: 'Qualcomm 64-bit MSM8953',
            cpu: 'Qualcomm 64-bit MSM8953 Snapdragon 625',
            gpu: 'Adreno 506',
            frecv_proc_ghz: `2.0`
        },
        Functii: {
            so_tip: 'Android',
            so_versiune: '6.0 with ASUS ZenUI 3.0',
            camera: 'Camera frontala 13Mp (senzor Sony IMX214, f/2.0, panorama selfie la 140grade)',
            senzor:	`Accelerator, E-Compass, Gyroscope, Proximity sensor, Ambient light sensor, RGB sensor, IR sensor, Fingerprint`,	
            audio: `Difuzor cu 5 magneti si Tehnologie de Amplificare Inteligenta NXP pentru performante de pana la 4 ori mai bune
                    Microfon intern dual cu Tehnologie ASUS de Reducere a Zgomotului de Fundal
                    Sunet Hi-Res pe 24 de biti / 192kHz , un standard de 4 ori mai bun decat calitatea audio CD`,
            camera_foto: `12`,
            functii: `Blitz Dual-LED
                        Camp de vizualizare de 82Â°
                        Inregistrare video la 4K UHD (3840 x 2160), 30 de cadre pe secunda
                        Senzor de corectie a culorilor (RGB) pentru cel mai bun balans de alb si culori cu un aspect foarte natural
                        Stabilizarea electronica a clipurilor video pe 3 axe
                        Stabilizarea optica a imaginilor pe 4 axe, 4 stop-uri`
        },
        Conectivitate: {
            tehnologie_wirless: 'Wi Fi',
            bluetooth: '4.2',
            wlan: '802.11 b/g/n',
            nfc: 'Cu NFC',
            usb: 'USB2.0 Type-C',
            porturi: 'Fara Jack 3.5mm',
            tehnologie:	` 3G
                        4G
                        GPS`
        },
        Baterie: {
            tip_baterie: 'Incarcare Inversa, Non-schimbabila',
            Baterie: 5000
        }
    },
    inCart: false,
     inFavorites: false,
    count: 0,
    total: 0
},

{
    id: 8,
    title: 'ASUS ZenFone 5 ZE620KL 64GB Dual Sim 4G Meteor Silver',
    img: '../img_phones/asus/id8/pic1.jpg',
    price: 1674,
    company: 'Asus',
    info: {
        General: {
                dual_sim: 'Da',
                retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
                retea_3g: 'HSDPA 850 / 900 / 1900 / 2100',
                retea_4g: 'LTE',
                gps: 'GPS',
                altele: `Dual SIM (Nano-SIM, dual stand-by)`,
                culoare: 'Silver',
                tip_telefon: 'Smartphone'
        },
        Display: {
                dim_display_inch: 6.2,
                rezolutie_px: '1080 x 2246 pixels, 18.7:9 ratio (~402 ppi density)',
                culori: '16M',
                tip_display: 'Touchscreen Capacitiv',
                tehnologie_display: 'IPS LCD capacitive touchscreen, 16M colors',
                caracteristici: `95% DCI-P3 coverage
                                ASUS ZenUI 5.0
                                Corning Gorilla Glass (unspecified version)`,
        },
        Dimensiuni: {
            dim_w_d_h_mm: '153 x 75.7 x 7.9mm',
            greutate_g: '165g'
        },
        Memorie: {
            slot_mem: 'microSD, up to 512 GB (uses SIM 2 slot)',
            capacitate_gb: '64GB',
            mem_ram: '4GB'
        },
        Procesor: {
            nr_nucleu_proc: 'Octa Core',
            chipset: 'Octa-core Kryo 260',
            cpu: 'Qualcomm SDM636 Snapdragon 636',
            gpu: 'Adreno 509',
            frecv_proc_ghz: `1.8`
        },
        Functii: {
            so_tip: 'Android',
            so_versiune: 'Android 8.0 (Oreo)',
            camera: '8 MP (f/2.0, 24mm, 1/4", 1.12µm), gyro EIS, 1080p',
            functii: 'Geo-tagging, touch focus, face detection, HDR, panorama',
            senzor:	`Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass`,	
            audio: `24-bit/192kHz audio
                    Active noise cancellation with dedicated mic
                    DTS Headphone X
                    Difuzor`,
            camera_foto: `12
                            8`
        },
        Conectivitate: {
            retea_3g: 'HSPA 42.2/5.76 Mbps',
            retea_4g: 'LTE-A (3CA) Cat12 600/100 Mbp',
            tehnologie_wirless: 'Wi Fi',
            bluetooth: 'v5.0, A2DP, LE',
            wlan: 'Wi-Fi 802.11 a/b/g/n/ac, WiFi Direct, hotspot',
            gprs: 'Da',
            edge: 'Da',
            nfc: 'Cu NFC',
            usb: '2.0, Type-C 1.0 reversible connector',
            tehnologie:	` 3G
                            4G
                            GPS
                            NFC`
        },
        Baterie: {
            tip_baterie: 'Non-removable Li-Ion 3300 mAh battery',
            baterie: 3300
        }
    },
    inCart: false,
     inFavorites: false,
    count: 0,
    total: 0
},
{
  id: 9,
  title: 'Huawei P30 Pro 256GB Dual SIM 4G Twilight 51093NFW',
  img: '../img_phones/huawei/id1/pic1.jpg',
  price: 4024,
  company: 'Huawei',
  info: {
      General: {

              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
              retea_3g: `HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Fast battery charging 40W (70% in 30 min)
    Fast wireless charging 15W
    Hybrid Dual SIM (Nano-SIM, dual stand-by)
    IP68 dust/water resistant (up to 2m for 30 mins)
    Power bank/Reverse wireless charging`,
              culoare: 'Twilight',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.47,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~398 ppi density)',
              culori: '16M',
              tip_display: 'OLED',
              tehnologie_display: 'OLED capacitive touchscreen, 16M colors',
              caracteristici: `DCI-P3
                              HDR10`,

      },
      Dimensiuni: {
          dim_w_d_h_mm: '158 x 73.4 x 8.4 mm (6.22 x 2.89 x 0.33 in)',
          greutate_g: '192g'
      },
      Memorie: {
          slot_mem: 'NM (Nano Memory), up to 256GB (uses SIM 2)',
          capacitate_gb: '256GB',
          mem_ram: '8GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'HiSilicon Kirin 980 (7 nm)',
          cpu: 'Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55),',
          gpu: 'Mali-G76 MP10'
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); EMUI 9.1',
          camera: '32 MP, f/2.0, (wide)',
          functii: `Leica optics, dual-LED dual-tone flash, panorama, HDR`,
          senzor:	'Fingerprint (under display), accelerometer, gyro, proximity, compass, color spectrum',
          audio: `32-bit/384kHz audio
  Difuzor
  Dolby Atmos sound`,
          camera_foto: `20
                      40
                      8`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, aptX HD, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
                  3G
                  4G
                  GPS
                  NFC`,
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 4200 mAh battery',
          baterie: 4200
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 10,
  title: 'Huawei P30 Pro 256GB Dual SIM 4G Breathing Crystal',
  img: '../img_phones/huawei/id2/pic1.jpg',
  price: 4024,
  company: 'Huawei',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
              retea_3g: `HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Fast battery charging 40W (70% in 30 min)
    Fast wireless charging 15W
    Hybrid Dual SIM (Nano-SIM, dual stand-by)
    IP68 dust/water resistant (up to 2m for 30 mins)
    Power bank/Reverse wireless charging`,
              culoare: 'Albastru,',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.47,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~398 ppi density)',
              culori: '16M',
              tip_display: 'OLED',
              tehnologie_display: 'OLED capacitive touchscreen, 16M colors',
              caracteristici: `DCI-P3
              HDR10`,

      },
      Dimensiuni: {
          dim_w_d_h_mm: '158 x 73.4 x 8.4 mm (6.22 x 2.89 x 0.33 in)',
          greutate_g: '192g'
      },
      Memorie: {
          slot_mem: 'NM (Nano Memory), up to 256GB (uses SIM 2)',
          capacitate_gb: '256GB',
          mem_ram: '8GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'HiSilicon Kirin 980 (7 nm)',
          cpu: 'Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP10',
          frecv_proc_ghz: `1.8
          1.92
          2.6`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); EMUI 9.1',
          camera: '32 MP, f/2.0, (wide)',
          functii: `Leica optics, dual-LED dual-tone flash, panorama, HDR`,
          senzor:	'Fingerprint (under display), accelerometer, gyro, proximity, compass, color spectrum',
          audio: `32-bit/384kHz audio
      Difuzor
      Dolby Atmos sound`,
          camera_foto: `20
                          40
                           8`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, aptX HD, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          NFC: 'Cu NFC',
          USB: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
          3G
          4G
          GPS`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 4200 mAh battery',
          Baterie: 4200
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},
  
{
  id: 11,
  title:  'Huawei P30 Pro 128GB Dual SIM 4G Breathing Crystal',
  img: '../img_phones/huawei/id3/pic1.jpg',
  price: 3614,
  company: 'Huawei',
  info: {
      General: {

              dual_sim: 'Huawe',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
              retea_3g: 'HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100',
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Fast battery charging 40W (70% in 30 min)
    Fast wireless charging 15W
    Hybrid Dual SIM (Nano-SIM, dual stand-by)
    IP68 dust/water resistant (up to 2m for 30 mins)
    Power bank/Reverse wireless charging`,
              culoare: 'Albastru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.47,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~398 ppi density)',
              culori: '16M',
              tip_display: 'OLED',
              tehnologie_display: 'OLED capacitive touchscreen, 16M colors',
              caracteristici: `DCI-P3
                              HDR10`,

      },
      Dimensiuni: {
          dim_w_d_h_mm: '158 x 73.4 x 8.4 mm',
          greutate_g: '192g'
      },
      Memorie: {
          slot_mem: 'NM (Nano Memory), up to 256GB (uses SIM 2)',
          capacitate_gb: '128GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'HiSilicon Kirin 980 (7 nm)',
          cpu: 'Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP10',
          frecv_proc_ghz: `1.8
          1.92
          2.6`
      },
      Functii: {
          so_tip: 'Android,',
          so_versiune: 'Android 9.0 (Pie); EMUI 9.1',
          camera: '32 MP, f/2.0, (wide)',
          functii: 'Leica optics, dual-LED dual-tone flash, panorama, HDR',
          senzor:	`Fingerprint (under display), accelerometer, gyro, proximity, compass, color spectrum`,
          audio: `32-bit/384kHz audio
                  Difuzor
                  Dolby Atmos sound`,
          camera_foto: `20
          40
          8`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, aptX HD, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
                  3G
                  4G
                  GPS`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 4200 mAh battery',
          Baterie: 4200
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 12,
  title: 'Huawei P30 Pro 128GB Dual SIM 4G Mystic Blue',
  img: '../img_phones/huawei/id4/pic1.jpg',
  price: 3614,
  company: 'Huawei',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
              retea_3g: 'HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100',
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Fast battery charging 40W (70% in 30 min)
    Fast wireless charging 15W
    Hybrid Dual SIM (Nano-SIM, dual stand-by)
    IP68 dust/water resistant (up to 2m for 30 mins)
    Power bank/Reverse wireless charging`,
              culoare: 'Albastru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.47,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~398 ppi density)',
              culori: '16M',
              tip_display: 'OLED',
              tehnologie_display: 'OLED capacitive touchscreen, 16M colors',
              caracteristici: `DCI-P3
              HDR10`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '158 x 73.4 x 8.4 mm',
          greutate_g: '192g'
      },
      Memorie: {
          slot_mem: 'NM (Nano Memory), up to 256GB (uses SIM 2)',
          capacitate_gb: '128GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Dual Core',
          chipset: 'HiSilicon Kirin 980 (7 nm)',
          cpu: 'Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP10',
          frecv_proc_ghz: `1.8
                          1.92
                          2.6`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); EMUI 9.1',
          camera: '32 MP, f/2.0, (wide)',
          functii: 'Leica optics, dual-LED dual-tone flash, panorama, HDR',
          senzor:	'Fingerprint (under display), accelerometer, gyro, proximity, compass, color spectrum',
          audio: `32-bit/384kHz audio
  Difuzor
  Dolby Atmos sound`,
          camera_foto: `20
          40
          8`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, aptX HD, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS`,
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 4200 mAh battery',
          baterie: 4200
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 13,
  title: 'Huawei P30 128GB Dual SIM 4G Breathing Crystal',
  img: '../img_phones/huawei/id5/pic1.jpg',
  price: 3094,
  company: 'Huawei',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
              retea_3g: `HSDPA 850 / 900 / 1900 / 2100`,
              retea_4g: 'LTE',
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: ` Fast battery charging 22.5W
        Front/back glass & aluminum frame`,
              culoare: 'Albastru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.1,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~422 ppi density)',
              culori: '16M',
              tip_display: 'OLED',
              tehnologie_display: 'OLED capacitive touchscreen, 16M colors',
      },
      Dimensiuni: {
          dim_w_d_h_mm: '157.5 x 77.4 x 7.7 mm',
          greutate_g: '208g'
      },
      Memorie: {
          slot_mem: 'fara slot card',
          capacitate_gb: '128GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'HiSilicon Kirin 980 (7 nm)',
          cpu: 'Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP10',
          frecv_proc_ghz: `1.8
                          1.92
                          2.6`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie)',
          camera: '32 MP, f/2.0, (wide)',
          functii: 'Leica optics, LED flash, HDR, panorama',
          senzor:	'Fingerprint (under display), accelerometer, gyro, proximity, compass',
          audio: `32-bit/384kHz audio
  Active noise cancellation with dedicated mic
  Difuzor`,
          camera_foto: `16
          40
          8`,
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE, EDR, aptX HD',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, WiFi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Jack 3.5mm',
          tehnologie:	`2G
          3G
          4G
          GPS
          NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po battery',
          baterie: 3650
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 14,
  title: 'Huawei P30 Pro 128GB Dual SIM 4G Midnight Black',
  img: '../img_phones/huawei/id6/pic1.jpg',
  price: 2999,
  company: 'Huawei',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
              retea_3g: 'HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              gps: 'GPS',
              altele: `Fast battery charging 40W (70% in 30 min)
    Fast wireless charging 15W
    Hybrid Dual SIM (Nano-SIM, dual stand-by)
    IP68 dust/water resistant (up to 2m for 30 mins)
    Power bank/Reverse wireless charging`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.47,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~398 ppi density)',
              culori: '16M',
              tip_display: 'OLED',
              tehnologie_display: 'OLED capacitive touchscreen, 16M colors',
              caracteristici: `DCI-P3
              HDR10`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '158 x 73.4 x 8.4 mm',
          greutate_g: '192g'
      },
      Memorie: {
          slot_mem: 'NM (Nano Memory), up to 256GB (uses SIM 2)',
          capacitate_gb: '128GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'HiSilicon Kirin 980 (7 nm)',
          cpu: 'Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP10',
          frecv_proc_ghz: `1.8
          1.92
          2.6`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); EMUI 9.1',
          senzor:	`Fingerprint (under display), accelerometer, gyro, proximity, compass, color spectrum`,	
          audio: `32-bit/384kHz audio
  Difuzor
  Dolby Atmos sound`,
          camera: '32 MP, f/2.0, (wide)',
          functii: `Leica optics, dual-LED dual-tone flash, panorama, HDR`,
          camera_foto: `20
          40
          8`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, aptX HD, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
          3G
          4G
          GPS`,
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 4200 mAh battery',
          baterie: 4200
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 15,
  title: 'Huawei P30 Pro 128GB Dual SIM 4G Twilight',
  img: '../img_phones/huawei/id7/pic1.jpg',
  price: 2999,
  company: 'Huawei',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
              retea_3g: `HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Fast battery charging 40W (70% in 30 min)
        Fast wireless charging 15W
        Hybrid Dual SIM (Nano-SIM, dual stand-by)
        IP68 dust/water resistant (up to 2m for 30 mins)
        Power bank/Reverse wireless charging`,
              culoare: 'Twilight',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.47,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~398 ppi density)',
              culori: '16M',
              tip_display: 'OLED',
              tehnologie_display: 'OLED capacitive touchscreen, 16M colors',
              caracteristici: `DCI-P3
                              HDR10`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '158 x 73.4 x 8.4 mm',
          greutate_g: '192g'
      },
      Memorie: {
          slot_mem: 'NM (Nano Memory), up to 256GB (uses SIM 2)',
          capacitate_gb: '128GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'HiSilicon Kirin 980 (7 nm)',
          cpu: 'Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP10',
          frecv_proc_ghz: `1.8
                          1.92
                          2.6`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); EMUI 9.1',
          camera: '32 MP, f/2.0, (wide)',
          senzor:	'Fingerprint (under display), accelerometer, gyro, proximity, compass, color spectrum',	
          audio: `32-bit/384kHz audio
          Difuzor
          Dolby Atmos sound`,
          camera_foto: `20
                      40
                      8`,
          functii: `Leica optics, dual-LED dual-tone flash, panorama, HDR`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, aptX HD, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	` 2G
                      3G
                      4G
                      GPS`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 4200 mAh battery',
          Baterie: 4200
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 16,
  title: 'Huawei P30 128GB Dual SIM 4G Midnight Black',
  img: '../img_phones/huawei/id8/pic1.jpg',
  price: 2399,
  company: 'Huawei',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
              retea_3g: 'HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100',
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Fast battery charging 22.5W
            Hybrid Dual SIM (Nano-SIM, dual stand-by)
            IP68 dust/water resistant (up to 2m for 30 mins)`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.1,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~422 ppi density)',
              culori: '16M',
              tip_display: 'OLED',
              tehnologie_display: 'OLED capacitive touchscreen, 16M colors',
              caracteristici: `DCI-P3
                              HDR10`,
      },
      Dimensiuni: {
          dim_w_d_h_mm: '149.1 x 71.4 x 7.6 mm',
          greutate_g: '165g'
      },
      Memorie: {
          slot_mem: 'fara slot card',
          capacitate_gb: '128GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'HiSilicon Kirin 980 (7 nm)',
          cpu: 'Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP10',
          frecv_proc_ghz: ` 1.8
                           1.92
                           2.6`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); EMUI 9.1',
          camera: '32 MP, f/2.0, (wide)',
          functii: 'Leica optics, dual-LED dual-tone flash, panorama, HDR',
          senzor:	`Fingerprint (under display), accelerometer, gyro, proximity, compass, color spectrum`,	
          audio: `32-bit/384kHz audio
          Active noise cancellation with dedicated mic
          Difuzor
          Dolby Atmos sound`,
          camera_foto: `16
                          40
                          8`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE, EDR, aptX HD',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, WiFi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          tehnologie:	` 2G
                      3G
                      4G
                      GPS
                      NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 3650 mAh battery',
          baterie: 3650
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},
{
  id: 17,
  title: 'iPhone XS 64GB 4G Space Gray',
  img: '../img_phones/iphone/id1/pic1.jpg',
  price: 3399,
  company: 'Apple',
  info: {
      General: {

              dual_sim: 'Nu',
              retea_3g: `CDMA2000 1xEV-DO
                      HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `Apple Pay (Visa, MasterCard, AMEX certified)
                  IP68 dust/water resistant (up to 2m for 30 mins)
                  Single SIM (Nano-SIM)`,
              culoare: 'Gri',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 5.8,
              rezolutie_px: '1125 x 2436 pixels, 19.5:9 ratio (~ 458 ppi density)',
              culori: '16M',
              tip_display: 'Super AMOLED',
              tehnologie_display: 'Super AMOLED capacitive touchscreen, 16M colors',
              caracteristici: `120 Hz touch-sensing
                      3D Touch display
                      Dolby Vision/HDR10 compliant
                      Scratch-resistant glass, oleophobic coating
                      True-tone display
                      Wide color gamut display`,

      },
      Dimensiuni: {
          dim_w_d_h_mm: '143.6 x 70.9 x 7.7 mm',
          greutate_g: '177g'
      },
      Memorie: {
          slot_mem: 'fara slot',
          capacitate_gb: '64GB',
          mem_ram: '4GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Hexa Core',
          chipset: 'Apple A12 Bionic',
          cpu: 'Hexa-core',
          gpu: 'Apple GPU (4-core graphics)'
      },
      Functii: {
          so_tip: 'iOS',
          so_versiune: 'iOS 12',
          camera: '7 MP, f/2.2, 32mm',
          functii: `HDR
               Quad-LED dual-tone flash, 
               HDR (photo/panorama)`,
          senzor:	'Face ID, accelerometer, gyro, proximity, compass, barometer',
          audio: `Active noise cancellation with dedicated mic
              Difuzor`,
          camera_foto: '12'
      },
      Conectivitate: {
          con_3g: 'HSPA 42.2/5.76 Mbps',
          con_4g: 'LTE-A (4CA) Cat16 1024/150 Mbps',
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '2.0, proprietary reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`3G
                  4G
                  GPS
                  NFC`,
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 2658 mAh battery (10.13 Wh)',
          baterie: 2658
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 18,
  title: 'iPhone XS 64GB 4G Silver',
  img: '../img_phones/iphone/id2/pic1.jpg',
  price: 3399,
  company: 'Apple',
  info: {
      General: {
              dual_sim: 'Nu',
              retea_3g: `CDMA2000 1xEV-DO
                      HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `Apple Pay (Visa, MasterCard, AMEX certified)
                  IP68 dust/water resistant (up to 2m for 30 mins)
                  Single SIM (Nano-SIM)`,
              culoare: 'Silver',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.5,
              rezolutie_px: '1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)',
              culori: '16M',
              tip_display: 'Super AMOLED capacitive touchscreen, 16M colors',
              tehnologie_display: 'Super AMOLED capacitive touchscreen, 16M colors',
              caracteristici: `120 Hz touch-sensing
                      3D Touch display
                      Dolby Vision/HDR10 compliant
                      Scratch-resistant glass, oleophobic coating
                      True-tone display
                      Wide color gamut display`,

      },
      Dimensiuni: {
          dim_w_d_h_mm: '157.5 x 77.4 x 7.7 mm',
          greutate_g: '208g'
      },
      Memorie: {
          slot_mem: 'fara slot',
          capacitate_gb: '64GB',
          mem_ram: '4GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Hexa Core',
          chipset: 'Apple A12 Bionic',
          cpu: 'Hexa-core',
          GPU: 'Apple GPU (4-core graphics)'
      },
      Functii: {
          so_tip: 'iOS',
          so_versiune: 'iOS 12',
          camera: '7 MP, f/2.2, 32mm',
          functii: `HDR
               Quad-LED dual-tone flash, 
               HDR (photo/panorama)`,
          senzor:	'Face ID, accelerometer, gyro, proximity, compass, barometer',
          audio: `Active noise cancellation with dedicated mic
              Difuzor`,
          camera_foto: '12'
      },
      Conectivitate: {
          con_3g: 'HSPA 42.2/5.76 Mbps',
          con_4g: 'LTE-A (4CA) Cat16 1024/150 Mbps',
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot',
          gprs: 'Da',
          edge: 'Da',
          NFC: 'Cu NFC',
          USB: '2.0, proprietary reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`3G
                  4G
                  GPS
                  NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 2658 mAh battery (10.13 Wh)',
          Baterie: 2658
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},
  
{
  id: 19,
  title:  'iPhone 11 64GB 4G Space Grey',
  img: '../img_phones/iphone/id3/pic1.jpg',
  price: 3849,
  company: 'Apple',
  info: {
      General: {

              dual_sim: 'Nu',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900',
              retea_3g: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Apple Pay (Visa, MasterCard, AMEX certified)
                  Fast battery charging 18W: 50% in 30 min
                  Front/back glass, aluminum frame (7000 series)
                  IP68 dust/water resistant (up to 2m for 30 mins)
                  Nano-SIM and/or Electronic SIM card
                  Qi wireless charging
                  Scratch-resistant glass, oleophobic coating
                  USB Power Delivery 2.0`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.1,
              rezolutie_px: '828 x 1792 pixels, 19.5:9 ratio (~326 ppi density)',
              culori: '16M',
              tip_display: 'Touchscreen Capacitiv',
              tehnologie_display: 'Liquid Retina IPS LCD capacitive touchscreen, 16M colors',
              caracteristici: `120 Hz touch-sensing
                      625 nits
                      Dolby Vision
                      HDR10
                      True-tone
                      Wide color gamut`,

      },
      Dimensiuni: {
          dim_w_d_h_mm: '150.9 x 75.7 x 8.3mm',
          greutate_g: '194g'
      },
      Memorie: {
          slot_mem: 'fara slot',
          capacitate_gb: '64GB',
          mem_ram: '4GB'
      },
      Procesor: {
          chipset: 'Apple A13 Bionic (7 nm+)'
      },
      Functii: {
          so_tip: 'iOS',
          so_versiune: 'iOS 13',
          camera: '12 MP, f/2.2',
          functii: 'Quad-LED dual-tone flash, HDR (photo/panorama)',
          senzor:	`Face ID, accelerometer, gyro, proximity, compass, barometer
              Siri natural language commands and dictation`,
          audio: `Active noise cancellation with dedicated mic
              Difuzor
              Dolby Atmos
              Dolby Digital Plus`,
          camera_foto: '12'
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, hotspot',
          nfc: 'Cu NFC',
          usb: '2.0, proprietary reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
                  3G
                  4G
                  GPS
                  NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 3110 mAh battery',
          baterie: 3110
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 20,
  title: 'iPhone 6s Plus 64GB Rose Gold',
  img: '../img_phones/iphone/id4/pic1.jpg',
  price: 1649,
  company: 'Apple',
  info: {
      General: {
              dual_sim: 'Nu',
              gps: 'GPS',
              altele: `Nano-SIM
                  Fingerprint sensor (Touch ID v2)
                  Apple Pay (Visa, MasterCard, AMEX certified)`,
              culoare: 'Roz',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 5.5,
              rezolutie_px: '1080 x 1920 pixels (~401 ppi pixel density)',
              culori: '16M',
              tip_display: 'Touchscreen Capacitiv',
              tehnologie_display: 'LED-backlit IPS LCD',
              caracteristici: `Ion-strengthened glass, oleophobic coating
                      3D Touch display
                      Display Zoom`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '158.2 x 77.9 x 7.3 mm',
          greutate_g: '192g'
      },
      Memorie: {
          slot_mem: 'fara slot',
          capacitate_gb: '64GB',
          mem_ram: '2GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Dual Core',
          chipset: 'Apple A9',
          cpu: '1.84 GHz Twister',
          gpu: 'PowerVR GT7600 (six-core graphics)',
          frecv_proc_ghz: 1.84
      },
      Functii: {
          so_tip: 'iOS',
          so_versiune: 'iOS 9, upgradable to iOS 9.0.2',
          senzor:	'Accelerometer, gyro, proximity, compass, barometer',
          audio: 'Difuzor',
          camera_foto: '12'
      },
      Conectivitate: {
          retea_3g: 'HSPA 42.2/5.76 Mbps, LTE Cat6 300/50 Mbps, EV-DO Rev.A 3.1 Mbps',
          retea_4g: 'Cu 4G',
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '4.2, A2DP, LE',
          wlan: '802.11 a/b/g/n/ac, dual-band, hotspot',
          gprs: 'Da',
          edge: 'Da',
          porturi: 'Lightning connector 3.5 mm jack',
          tehnologie:	`3G
                  4G
                  GPS`,
      },
      Baterie: {
          tip_baterie: 'Li-Po 2750 mAh, fixa',
          baterie: 2750
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 21,
  title: 'iPhone XS Max 64GB 4G Gold',
  img: '../img_phones/iphone/id5/pic1.png',
  price: 3999,
  company: 'Apple',
  info: {
      General: {
              dual_sim: 'Nu',
              retea_3g: `CDMA2000 1xEV-DO
                      HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `	
                  Apple Pay (Visa, MasterCard, AMEX certified)
                  IP68 dust/water resistant (up to 2m for 30 mins)
                  Single SIM (Nano-SIM)`,
              culoare: 'Auriu',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.5,
              rezolutie_px: '1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)',
              culori: '16M',
              tip_display: 'Super AMOLED',
              tehnologie_display: 'Super AMOLED capacitive touchscreen, 16M colors',
              caracteristici: `120 Hz touch-sensing
                      3D Touch display
                      Dolby Vision/HDR10 compliant
                      Scratch-resistant glass, oleophobic coating
                      True-tone display
                      Wide color gamut display`,
      },
      Dimensiuni: {
          dim_w_d_h_mm: '157.5 x 77.4 x 7.7 mm',
          greutate_g: '208g'
      },
      Memorie: {
          slot_mem: 'fara slot',
          capacitate_gb: '64GB',
          mem_ram: '4GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Hexa Core',
          chipset: 'Apple A12 Bionic',
          cpu: 'Hexa-core',
          gpu: 'Apple GPU (4-core graphics)'
      },
      Functii: {
          so_tip: 'iOS',
          so_versiune: 'iOS 12',
          senzor:	'Face ID, accelerometer, gyro, proximity, compass, barometer',
          audio: `Active noise cancellation with dedicated mic
              Difuzor`,
          camera_foto: '12',
          functii: `HDR
               Quad-LED dual-tone flash, HDR (photo/panorama)`
      },
      Conectivitate: {
          retea_3g: 'HSPA 42.2/5.76 Mbps',
          retea_4g: 'LTE-A (4CA) Cat16 1024/150 Mbps',
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '2.0, proprietary reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`3G
                  4G
                  GPS
                  NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 3174 mAh battery',
          baterie: 3174
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 22,
  title: 'iPhone 8 64GB Gold',
  img: '../img_phones/iphone/id6/pic1.png',
  price: 2499,
  company: 'Apple',
  info: {
      General: {
              dual_sim: 'Nu',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900',
              retea_3g: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
              rezistenta: 'Apa',
              culoare: 'Auriu',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 4.7,
              rezolutie_px: '750 x 1334 pixels',
              culori: '16M',
              tip_display: 'Touchscreen Capacitiv',
              tehnologie_display: 'LED-backlit IPS LCD'
      },
      Dimensiuni: {
          dim_w_d_h_mm: '138.4 x 67.3 x 7.3 mm',
          greutate_g: '148g'
      },
      Memorie: {
          capacitate_gb: '64GB',
          mem_ram: '2GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Hexa Core',
          chipset: 'Apple A11 Bionic',
          cpu: 'Hexa-core (2x Monsoon + 4x Mistral)',
          gpu: 'Apple GPU (three-core graphics)'
      },
      Functii: {
          so_tip: 'iOS',
          so_versiune: 'iOS 11',
          senzor:	`Fingerprint (front-mounted)
              accelerometer
              barometer
              compass
              gyro
              proximity`,	
          audio: 'Difuzor',
          camera: '7 MP, f/2.2, 1080p@30fps, 720p@240fps, face detection, HDR, panorama',
          functii: `1/3" sensor size
               HDR (photo/panorama)
               face/smile detection
               geo-tagging
               simultaneous 4K video and 8MP image recording
               touch focus`,
          camera_foto: '12'
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot',
          gprs: 'Da',
          edge: 'Da',
          usb: '2.0, reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`3G
                  4G
                  GPS
                  NFC`,
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion'
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 23,
  title: 'iPhone XS Max 64GB 4G Silver Apple',
  img: '../img_phones/iphone/id7/pic1.jpg',
  price: 3999,
  company: 'Apple',
  info: {
      General: {
              dual_sim: 'Nu',
              retea_3g: `CDMA2000 1xEV-DO
                      HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `Apple Pay (Visa, MasterCard, AMEX certified)
                  IP68 dust/water resistant (up to 2m for 30 mins)
                  Single SIM (Nano-SIM)`,
              culoare: 'Silver',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.5,
              rezolutie_px: '1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)',
              culori: '16M',
              tip_display: 'Super AMOLED',
              tehnologie_display: 'Super AMOLED capacitive touchscreen, 16M colors',
              caracteristici: `120 Hz touch-sensing
                      3D Touch display
                      Dolby Vision/HDR10 compliant
                      Scratch-resistant glass, oleophobic coating
                      True-tone display
                      Wide color gamut display`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '157.5 x 77.4 x 7.7 mm',
          greutate_g: '208g'
      },
      Memorie: {
          slot_mem: 'fara slot',
          capacitate_gb: '64GB',
          mem_ram: '4GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Hexa Core',
          chipset: 'Apple A12 Bionic',
          cpu: 'Hexa-core',
          gpu: 'Apple GPU (4-core graphics)'
      },
      Functii: {
          so_tip: 'iOS',
          so_versiune: 'iOS 12',
          senzor:	'Face ID, accelerometer, gyro, proximity, compass, barometer',	
          audio: `Active noise cancellation with dedicated mic
              Difuzor`,
          camera_foto: '12',
          functii: `HDR
               Quad-LED dual-tone flash, HDR (photo/panorama)`
      },
      Conectivitate: {
          retea_3g: 'HSPA 42.2/5.76 Mbps',
          retea_4g: 'LTE-A (4CA) Cat16 1024/150 Mbps',
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '2.0, proprietary reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`3G
                  4G
                  GPS
                  NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 3174 mAh battery',
          Baterie: 3174
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 24,
  title: 'Apple iPhone 11 Pro Max 256GB',
  img: '../img_phones/iphone/id8/pic1.jpeg',
  price: 6699,
  company: 'Apple',
  info: {
      General: {
              dual_sim: 'Nu',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900',
              retea_3g: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Fast battery charging 18W: 50% in 30 min
                  Qi wireless charging
                  USB Power Delivery 2.0`,
              culoare: 'Auriu',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.5,
              rezolutie_px: '1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)',
              culori: '16M',
              tip_display: 'OLED',
              tehnologie_display: 'Super Retina XDR OLED capacitive touchscreen, 16M colors',
              caracteristici: `120 Hz touch-sensing
                      800 nits
                      Dolby Vision
                      HDR10
                      Scratch-resistant glass, oleophobic coating
                      True-tone
                      Wide color gamut`,
      },
      Dimensiuni: {
          dim_w_d_h_mm: '158 x 77.8 x 8.1 mm',
          greutate_g: '226g'
      },
      Memorie: {
          slot_mem: 'fara slot',
          capacitate_gb: '256GB',
          mem_ram: '4GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Apple A13 Bionic (7 nm+)',
          cpu: 'Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)',
          gpu: 'Apple GPU (4-core graphics)',
          frecv_proc_ghz: `1.8
                        2.65`
      },
      Functii: {
          so_tip: 'iOS',
          so_versiune: 'iOS 13, upgradable to iOS 13.1',
          camera: '12 MP, f/2.2',
          functii: 'Quad-LED dual-tone flash, HDR (photo/panorama)',
          senzor:	`Face ID, accelerometer, gyro, proximity, compass, barometer
              Siri natural language commands and dictation`,	
          audio: `Active noise cancellation with dedicated mic
              Dolby Atmos
              Dolby Digital Plus`,
          camera_foto: '12'
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE',
          wlan:' Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, hotspot',
          nfc: 'Cu NFC',
          usb: '2.0, proprietary reversible connector',
          tehnologie:	`3G
                  4G
                  GPS
                  NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 3969 mAh battery (15.04 Wh)',
          baterie: 3969
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},
{
  id: 25,
  title: 'Samsung Galaxy Note 10 Plus N975 512GB Dual SIM 4G Aura Black',
  img: '../img_phones/samsung/id1/pic1.jpg',
  price: 4999,
  company: 'Samsung',
  info: {
      General: {

              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
              retea_3g: `HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Always-on display
                      Bixby
                      Corning Gorilla Glass
                      Fast battery charging 45W
                      HDR10+
                      Hybrid Dual SIM (Nano-SIM, dual stand-by)
                      IP68 (pana la 1.5m pentru 30 minute)
                      Samsung DeX (suporta experienta desktop)
                      Samsung Pay (Visa, MasterCard certified)
                      Sticla fata/spate (Gorilla Glass), carcasa otel inoxidabil
                      Stylus (Bluetooth, accelerometru, gyro)
                      USB Power Delivery 3.0`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.8,
              rezolutie_px: '1440 x 3040 pixels, 19:9 ratio (~498 ppi density)',
              culori: '16M',
              tip_display: 'AMOLED',
              tehnologie_display: 'Dinamic AMOLED',
      },
      Dimensiuni: {
          dim_w_d_h_mm: '162.3 x 77.2 x 7.9mm',
          greutate_g: '196g'
      },
      Memorie: {
          slot_mem: 'microSD, up to 1 TB (foloseste SIM slot)',
          capacitate_gb: '512GB',
          mem_ram: '12GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Exynos 9825 (7 nm)',
          cpu: 'Octa-core (2x2.73 GHz Mongoose M4 & 2x2.4 GHz Cortex-A75 & 4x1.9 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP12',
          frecv_proc_ghz:  `1.9
          2.4
          2.73`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); One UI',
          camera: '10 MP, f/2.2, 26mm (wide), 1.22µm, Dual Pixel PDAF',
          functii: `Dual video call, Auto-HDR
                  LED flash, auto-HDR, panorama`,
          senzor:	'Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, SpO2',
          audio: `32-bit/384kHz audio
                  Microfon dedicat
                  Sunet Dolby Atmos/AKG`,
          camera_foto: `12
                      16`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE, aptX',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: ' Fara Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS
                      NFC`,
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 4300 mAh battery',
          baterie: 4300
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 26,
  title: 'Samsung Galaxy Note 10 Plus N975 512GB Dual SIM 4G Aura Glow',
  img: '../img_phones/samsung/id2/pic1.jpg',
  price: 5299,
  company: 'Samsung',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
              retea_3g: `HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Always-on display
                      Bixby
                      Corning Gorilla Glass
                      Fast battery charging 45W
                      HDR10+
                      Hybrid Dual SIM (Nano-SIM, dual stand-by)
                      IP68 (pana la 1.5m pentru 30 minute)
                      Samsung DeX (suporta experienta desktop)
                      Samsung Pay (Visa, MasterCard certified)
                      Sticla fata/spate (Gorilla Glass), carcasa otel inoxidabil
                      Stylus (Bluetooth, accelerometru, gyro)
                      USB Power Delivery 3.0`,
              culoare: 'Albastru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.8,
              rezolutie_px: '1440 x 3040 pixels, 19:9 ratio (~498 ppi density)',
              culori: '16M',
              tip_display: 'AMOLED',
              tehnologie_display: `Dinamic AMOLED`

      },
      Dimensiuni: {
          dim_w_d_h_mm: '162.3 x 77.2 x 7.9mm',
          greutate_g: '196g'
      },
      Memorie: {
          slot_mem: 'microSD, up to 1 TB (foloseste SIM slot)',
          capacitate_gb: '512GB',
          mem_ram: '12GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Exynos 9825 (7 nm)',
          cpu: 'Octa-core (2x2.73 GHz Mongoose M4 & 2x2.4 GHz Cortex-A75 & 4x1.9 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP12',
          frecv_proc_ghz: `1.9
                          2.4
                          2.73`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); One UI',
          camera: '10 MP, f/2.2, 26mm (wide), 1.22µm, Dual Pixel PDAF',
          functii: `Dual video call, Auto-HDR
                      LED flash, auto-HDR, panorama`,
          senzor:	`Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, SpO2`,
          audio: `32-bit/384kHz audio
                  Microfon dedicat
                  Sunet Dolby Atmos/AKG`,
          camera_foto: `12
                       16`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE, aptX',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          NFC: 'Cu NFC',
          USB: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS
                      NFC`
      },
      Baterie: {
          tip_baterie: `Non-removable Li-Ion 4300 mAh battery`,
          Baterie: 4300
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},
  
{
  id: 27,
  title:  'Samsung Galaxy Note 10 Plus N975 512GB Dual SIM 4G Aura Glow',
  img: '../img_phones/samsung/id3/pic1.webp',
  price: 4899,
  company: 'Samsung',
  info: {
      General: {

              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
              retea_3g: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Always-on display
                      Bixby
                      Corning Gorilla Glass
                      Fast battery charging 45W
                      HDR10+
                      Hybrid Dual SIM (Nano-SIM, dual stand-by)
                      IP68 (pana la 1.5m pentru 30 minute)
                      Samsung DeX (suporta experienta desktop)
                      Samsung Pay (Visa, MasterCard certified)
                      Sticla fata/spate (Gorilla Glass), carcasa otel inoxidabil
                      Stylus (Bluetooth, accelerometru, gyro)
                      USB Power Delivery 3.0`,
              culoare: 'Alb',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch:  6.8,
              rezolutie_px: '1440 x 3040 pixels, 19:9 ratio (~498 ppi density)',
              culori: '16M',
              tip_display: 'AMOLED',
              tehnologie_display: 'Dinamic AMOLED',
      },
      Dimensiuni: {
          dim_w_d_h_mm: '162.3 x 77.2 x 7.9mm',
          greutate_g: '196g'
      },
      Memorie: {
          slot_mem: 'microSD, up to 1 TB (foloseste SIM slot)',
          capacitate_gb: '512GB',
          mem_ram: '12GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Exynos 9825 (7 nm)',
          cpu: 'Octa-core (2x2.73 GHz Mongoose M4 & 2x2.4 GHz Cortex-A75 & 4x1.9 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP12',
          frecv_proc_ghz: `1.9
                          2.4
                          2.73`
      },
      Functii: {
          so_tip: 'Android,',
          so_versiune: 'Android 9.0 (Pie); One UI',
          camera: '10 MP, f/2.2, 26mm (wide), 1.22µm, Dual Pixel PDAF',
          functii: `Dual video call, Auto-HDR
                  LED flash, auto-HDR, panorama`,
          senzor:	`Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, SpO2`,
          audio: `32-bit/384kHz audio
                  Microfon dedicat
                  Sunet Dolby Atmos/AKG`,
          camera_foto: `12
                      16`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE, aptX',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS
                      NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 4300 mAh battery',
          Baterie: 4300
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 28,
  title: 'Samsung Galaxy Note 10 N970 256GB Dual SIM 4G Aura Black',
  img: '../img_phones/samsung/id4/pic1.jpg',
  price: 3899,
  company: 'Samsung',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
              retea_3g: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
              retea_4g: ' HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Always-on display
                      Bixby
                      Corning Gorilla Glass
                      Fast battery charging 45W
                      HDR10+
                      Hybrid Dual SIM (Nano-SIM, dual stand-by)
                      IP68 (pana la 1.5m pentru 30 minute)
                      Samsung DeX (suporta experienta desktop)
                      Samsung Pay (Visa, MasterCard certified)
                      Sticla fata/spate (Gorilla Glass), carcasa otel inoxidabil
                      Stylus (Bluetooth, accelerometru, gyro)
                      USB Power Delivery 3.0`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.3,
              rezolutie_px: '1080 x 2280 pixels, 19:9 ratio (~401 ppi density)',
              culori: '16M',
              tip_display: 'AMOLED',
              tehnologie_display: ' Dinamic AMOLED'
      },
      Dimensiuni: {
          dim_w_d_h_mm: '151 x 71.8 x 7.9mm',
          greutate_g: '168g'
      },
      Memorie: {
          slot_mem: 'Fara slot',
          capacitate_gb: '256GB',
          mem_ram: '8GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Exynos 9825 (7 nm)',
          cpu: 'Octa-core (2x2.73 GHz Mongoose M4 & 2x2.4 GHz Cortex-A75 & 4x1.9 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP12',
          frecv_proc_ghz: `1.9
                          2.4
                          2.73`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); One UI',
          camera: `10 MP, f/2.2, 26mm (wide), 1.22µm, Dual Pixel PDAF`,
          functii: `Dual video call, Auto-HDR
                  LED flash, auto-HDR, panorama`,
          senzor:	'Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, SpO2',
          audio: `Microfon dedicat
                  Sunet Dolby Atmos/AKG`,
          camera_foto: `12
                      16`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE, aptX',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS
                      NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 3500 mAh battery',
          baterie: 3500
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 29,
  title: 'Samsung Galaxy S10 Plus G975 128GB Dual SIM 4G Black',
  img: '../img_phones/samsung/id5/pic1.jpg',
  price: 3629,
  company: 'Samsung',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
              retea_3g: `HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              altele: `ANT+
                      Bixby natural language commands and dictation
                      Fast battery charging 15W
                      Fast wireless charging 15W
                      Front/back glass (Gorilla Glass 6), aluminum frame
                      Hybrid Dual SIM (Nano-SIM, dual stand-by)
                      IP68 dust/water proof (up to 1.5m for 30 mins)
                      Power bank/Reverse wireless charging 9W
                      Samsung DeX (desktop experience support)
                      Samsung Pay (Visa, MasterCard certified)
                      Video: 2160p@60fps, 1080p@240fps, 720p@960fps, HDR, dual-video rec`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.4,
              rezolutie_px: '1440 x 3040 pixels, 19:9 ratio (~550 ppi density)',
              culori: '16M',
              tip_display: 'Super AMOLED',
              tehnologie_display: 'Super AMOLED capacitive touchscreen, 16M colors',
              caracteristici: `Always-on display
                              Corning Gorilla Glass 6
                              HDR10`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '157.6 x 74.1 x 7.8mm',
          greutate_g: '175g'
      },
      Memorie: {
          slot_mem: 'microSD, up to 512 GB (uses SIM 2 slot) - dual SIM model only',
          capacitate_gb: '128GB',
          mem_ram: '8GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Exynos 9820 Octa (8 nm) - EMEA',
          cpu: 'Octa-core (2x2.8 GHz Mongoose M4 & 2x*.* GHz Cortex-A75 & 4x*.* GHz Cortex-A55) - EMEA',
          gpu: 'Mali-G76 MP12 - EMEA',
          frecv_proc_ghz: `2.8`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); One UI',
          camera: `10 MP, f/1.9, Dual Pixel PDAF
                      8 MP, f/2.2, depth sensor`,
          functii: 'LED flash, auto-HDR, panorama',
          senzor:	'Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, heart rate, SpO2',
          audio: `32-bit/384kHz audio
                  Active noise cancellation with dedicated mic
                  Difuzoare stereo
                  Dolby Atmos sound`,
          camera_foto: `  12
                          16`,
      },
      Conectivitate: {
          retea_3g: 'HSPA 42.2/5.76 Mbps',
          retea_4g: 'LTE-A (8CA) Cat20 2000/316 Mbps',
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE, aptX',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Jack 3.5mm',
          tehnologie:	`2G
          3G
          4G
          GPS
          NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 4100 mAh battery',
          baterie: 4100
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 30,
  title: 'Samsung Galaxy Note 10 N970 256GB Dual SIM 4G Aura Glow',
  img: '../img_phones/samsung/id6/pic1.jpg',
  price: 3599,
  company: 'Samsung',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
              retea_3g: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
              retea_4g: 'LTE',
              gps: 'GPS',
              rezistenta: 'Apa sau praf ( certificat IP68 )',
              altele: `Always-on display
                      Bixby
                      Corning Gorilla Glass
                      Fast battery charging 45W
                      HDR10+
                      Hybrid Dual SIM (Nano-SIM, dual stand-by)
                      IP68 (pana la 1.5m pentru 30 minute)
                      Samsung DeX (suporta experienta desktop)
                      Samsung Pay (Visa, MasterCard certified)
                      Sticla fata/spate (Gorilla Glass), carcasa otel inoxidabil
                      Stylus (Bluetooth, accelerometru, gyro)
                      USB Power Delivery 3.0`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.3,
              rezolutie_px: '1080 x 2280 pixels, 19:9 ratio (~401 ppi density)',
              culori: '16M',
              tip_display: 'AMOLED',
              tehnologie_display: 'Dinamic AMOLED',
      },
      Dimensiuni: {
          dim_w_d_h_mm: '151 x 71.8 x 7.9mm',
          greutate_g: '168g'
      },
      Memorie: {
          slot_mem: 'Fara slot',
          capacitate_gb: '256GB',
          mem_ram: '8GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Exynos 9825 (7 nm)',
          cpu: 'Octa-core (2x2.73 GHz Mongoose M4 & 2x2.4 GHz Cortex-A75 & 4x1.9 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP12',
          frecv_proc_ghz: `1.9
                          2.4
                          2.73`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); One UI',
          senzor:	`Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, SpO2`,	
          audio: `Microfon dedicat
                  Sunet Dolby Atmos/AKG`,
          camera: '10 MP, f/2.2, 26mm (wide), 1.22µm, Dual Pixel PDAF',
          functii: `Dual video call, Auto-HDR
                  LED flash, auto-HDR, panorama`,
          camera_foto: `12
                      16`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE, aptX',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS
                      NFC`,
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 3500 mAh battery',
          baterie: 3500
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 31,
  title: 'Samsung Galaxy S10 G973 128GB Dual SIM 4G Black',
  img: '../img_phones/samsung/id7/pic1.jpg',
  price: 2999,
  company: 'Samsung',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
              retea_3g: `HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              altele: `ANT+
                      Bixby natural language commands and dictation
                      Fast battery charging 15W
                      Fast wireless charging 15W
                      Front/back glass (Gorilla Glass 6), aluminum frame
                      IP68 dust/water proof (up to 1.5m for 30 mins)
                      Power bank/Reverse wireless charging 9W
                      Samsung DeX (desktop experience support)
                      Samsung Pay (Visa, MasterCard certified)`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.1,
              rezolutie_px: '1440 x 3040 pixels',
              culori: '16M',
              tip_display: 'Super AMOLED',
              tehnologie_display: 'Super AMOLED capacitive touchscreen, 16M colors',
              caracteristici: `Always-on display
                              Corning Gorilla Glass 6
                              HDR10`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '7.8mm thickness',
          greutate_g: '157g'
      },
      Memorie: {
          slot_mem: 'microSD, up to 512 GB (uses SIM 2 slot)',
          capacitate_gb: '128GB',
          mem_ram: '8GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Exynos 9820 Octa (8 nm)',
          cpu: 'Octa-core (2x2.7 GHz Mongoose M4 & 2x2.3 GHz Cortex-A75 & 4x1.9 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP12',
          frecv_proc_ghz: `1.9
                          2.3
                          2.7`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); One UI',
          camera: '10 MP, f/1.9, Dual Pixel PDAF',
          senzor:	`Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, heart rate, SpO2`,	
          audio: `Difuzor`,
          camera_foto: `12
                          16`,
          functii: `LED flash, auto-HDR, panorama`
      },
      Conectivitate: {
          retea_3g: 'HSPA 42.2/5.76 Mbps',
          retea_4g: 'HSPA 42.2/5.76 Mbps',
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE, aptX',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Jack 3.5mm',
          tehnologie:	` 2G
                      3G
                      4G
                      5G
                      GPS
                      NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 3400 mAh battery',
          Baterie: 3400
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 32,
  title: 'Samsung Galaxy S10 G973 128GB Dual SIM 4G Blue',
  img: '../img_phones/samsung/id8/pic1.jpg',
  price: 2999,
  company: 'Samsung',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
              retea_3g: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
              gps: 'GPS',
              altele: `ANT+
                      Bixby natural language commands and dictation
                      Fast battery charging 15W
                      Fast wireless charging 15W
                      Front/back glass (Gorilla Glass 6), aluminum frame
                      IP68 dust/water proof (up to 1.5m for 30 mins)
                      Power bank/Reverse wireless charging 9W
                      Samsung DeX (desktop experience support)
                      Samsung Pay (Visa, MasterCard certified)`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.1,
              rezolutie_px: '1440 x 3040 pixels',
              culori: '16M',
              tip_display: 'Super AMOLED',
              tehnologie_display: 'Super AMOLED capacitive touchscreen, 16M colors',
              caracteristici: `Always-on display
                              Corning Gorilla Glass 6
                              HDR10`,
      },
      Dimensiuni: {
          dim_w_d_h_mm: '7.8 mm thickness',
          greutate_g: '157g'
      },
      Memorie: {
          slot_mem: 'microSD, up to 512 GB (uses SIM 2 slot)',
          capacitate_gb: '128GB',
          mem_ram: '8GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Exynos 9820 Octa (8 nm)',
          cpu: 'Octa-core (2x2.7 GHz Mongoose M4 & 2x2.3 GHz Cortex-A75 & 4x1.9 GHz Cortex-A55)',
          gpu: 'Mali-G76 MP12',
          frecv_proc_ghz: `1.9
                          2.3
                          2.7`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); One UI',
          camera: '10 MP, f/1.9, Dual Pixel PDAF',
          functii: 'LED flash, auto-HDR, panorama',
          senzor:	`Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer, heart rate, SpO2`,	
          audio: `Difuzor`,
          camera_foto: `12
                      16`
      },
      Conectivitate: {
          retea_3g: 'HSPA 42.2/5.76 Mbps',
          retea_4g: 'HSPA 42.2/5.76 Mbps',
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE, aptX',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, Wi-Fi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: '3.1, Type-C 1.0 reversible connector',
          porturi: 'Jack 3.5mm',
          tehnologie:	` 2G
                          3G
                          4G
                          5G
                          GPS
                          NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 3400 mAh battery',
          baterie: 3400
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},
{
  id: 33,
  title: 'Xiaomi Mi Mix 3 64GB Single SIM 5G Blue',
  img: '../img_phones/xiaomi/id1/pic1.jpg',
  price: 1599,
  company: 'Xiaomi',
  info: {
      General: {

              dual_sim: 'Nu',
              retea_2g: ` CDMA 800 / 1900 & TD-SCDMA
                          GSM 850 / 900 / 1800 / 1900`,
              retea_3g: `CDMA2000 1xEV-DO
                          HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `Fast battery charging 18W (Quick Charge 4+)
                      UFS2.1`,
              culoare: 'Albastru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.39,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)',
              culori: '16M',
              tip_display: 'Super AMOLED',
              tehnologie_display: 'Super AMOLED capacitive touchscreen, 16M colors',
              caracteristici: `Corning Gorilla Glass 5
                              HDR`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '157.9 x 74.7 x 8.5mm',
          greutate_g: '225g'
      },
      Memorie: {
          slot_mem: 'fara slot',
          capacitate_gb: '64GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Qualcomm SDM855 Snapdragon 855 (7 nm)',
          cpu: 'Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)',
          gpu: 'Adreno 640',
          frecv_proc_ghz:  `1.78
                          2.42
                          2.84`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); MIUI 10',
          camera: `Mechanical pop-up 2 MP, depth sensor
                  Mechanical pop-up 24 MP, 1/2.8", 0.9µm`,
          functii: `LED flash, HDR, panorama`,
          senzor:	'Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass',
          audio: `Active noise cancellation with dedicated mic
                  Difuzor`,
          camera_foto: `12`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, aptX HD, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, WiFi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          nfc: 'Cu NFC',
          usb: 'Type-C 1.0 reversible connector',
          porturi: ' Fara Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS
                      NFC`,
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 3800 mAh battery',
          baterie: 3800
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 34,
  title: 'Xiaomi Mi Mix 3 128GB Single SIM 5G Blue',
  img: '../img_phones/xiaomi/id2/pic1.jpg',
  price: 1799,
  company: 'Xiaomi',
  info: {
      General: {
              dual_sim: 'Nu',
              retea_2g: `CDMA 800 / 1900 & TD-SCDMA
                          GSM 850 / 900 / 1800 / 1900`,
              retea_3g: `CDMA2000 1xEV-DO
                          HSDPA 800 / 850 / 900 / 1700(AWS) / 1800 / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `Fast battery charging 18W (Quick Charge 4+)
                      UFS2.1`,
              culoare: 'Albastru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.39,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)',
              culori: '16M',
              tip_display: 'Super AMOLED',
              tehnologie_display: `Super AMOLED capacitive touchscreen, 16M colors`,
              caracteristici: ` Corning Gorilla Glass 5
                                  HDR`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '157.9 x 74.7 x 8.5mm',
          greutate_g: '225g'
      },
      Memorie: {
          slot_mem: 'fara slot',
          capacitate_gb: '128GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Qualcomm SDM855 Snapdragon 855 (7 nm)',
          cpu: 'Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)',
          gpu: 'Adreno 640',
          frecv_proc_ghz: `1.78
                          2.42
                          2.84`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); MIUI 10',
          camera: `Mechanical pop-up 2 MP, depth sensor
                  Mechanical pop-up 24 MP, 1/2.8", 0.9µm`,
          functii: ` LED flash, HDR, panorama`,
          senzor:	`Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass`,
          audio: `Active noise cancellation with dedicated mic
                  Difuzor`,
          camera_foto: `12`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, aptX HD, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, WiFi Direct, hotspot',
          gprs: 'Da',
          edge: 'Da',
          NFC: 'Cu NFC',
          USB: 'Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	` 2G
                          3G
                          4G
                          GPS
                          NFC`
      },
      Baterie: {
          tip_baterie: `Non-removable Li-Po 3800 mAh battery`,
          Baterie: 3800
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},
  
{
  id: 35,
  title:  'Xiaomi Black Shark 2 256GB Dual SIM 4G Shadow Black',
  img: '../img_phones/xiaomi/id3/pic1.jpg',
  price: 2699,
  company: 'Xiaomi',
  info: {
      General: {

              dual_sim: 'Nu',
              retea_2g: `CDMA 800 & TD-SCDMA
                          GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2`,
              retea_3g: `CDMA2000 1xEV-DO
                          HSDPA 850 / 900 / 1900 / 2100`,
              retea_4g: 'LTE band',
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `Fast battery charging 27W`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch:  6.39,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)',
              culori: '16M',
              tip_display: 'AMOLED',
              tehnologie_display: 'AMOLED capacitive touchscreen, 16M colors',
              caracteristici: `240 Hz touch-sensing
                              Always-on display
                              DCI-P3 100%,`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '163.6 x 75 x 8.8mm',
          greutate_g: '205g'
      },
      Memorie: {
          slot_mem: 'fara slot',
          capacitate_gb: '256GB',
          mem_ram: '12GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Qualcomm SDM855 Snapdragon 855 (7 nm)',
          cpu: 'Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)',
          gpu: 'Adreno 640',
          frecv_proc_ghz: `1.78
                          2.42
                          2.84`
      },
      Functii: {
          so_tip: 'Android,',
          so_versiune: 'Android 9.0 (Pie)',
          camera: '20 MP, f/2.0, 0.9µm',
          functii: `LED flash, HDR, panorama`,
          senzor:	`Fingerprint (under display, optical), accelerometer, gyro, proximity, compass`,
          audio: `Active noise cancellation with dedicated mic
                  Difuzoare stereo`,
          camera_foto: `12
                      48`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, aptX HD, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          nfc: 'Fara NFC',
          usb: '2.0, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 4000 mAh battery',
          Baterie: 4000
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 36,
  title: 'Xiaomi Black Shark 2 Pro 128GB Dual SIM 4G Shadow Black',
  img: '../img_phones/xiaomi/id4/pic1.jpg',
  price: 2579,
  company: 'Xiaomi',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: `CDMA 800 & TD-SCDMA
                          GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2`,
              retea_3g: `CDMA2000 1xEV-DO
                          HSDPA 850 / 900 / 1900 / 2100,`,
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `Fast battery charging 27W
                      UFS3.0W`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone',
              accesorii: 'Game Pad-Left Side Version & Holder'
      },
      Display: {
              dim_display_inch: 6.39,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)',
              culori: '16M',
              tip_display: 'AMOLED',
              tehnologie_display: `240 Hz touch-sensing
                                  AMOLED capacitive touchscreen, 16M colors
                                  Always-on display
                                  DCI-P3 109%`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '163.6 x 75 x 8.8mm',
          greutate_g: '205g'
      },
      Memorie: {
          slot_mem: 'Fara slot',
          capacitate_gb: '128GB',
          mem_ram: '8GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Qualcomm SDM855 Snapdragon 855+ (7 nm)',
          cpu: 'Octa-core (1x2.96 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)',
          gpu: 'Adreno 640 (700 MHz)',
          frecv_proc_ghz: `1.78
                          2.42
                          2.96`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie)',
          camera: `20 MP, f/2.0, 0.9µm`,
          functii: `LED flash, HDR, panorama`,
          senzor:	'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass',
          audio: `Active noise cancellation with dedicated mic
                  Difuzoare stereo`,
          camera_foto: `12
                      48`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, aptX HD, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          nfc: 'Cu NFC',
          usb: '2.0, Type-C 1.0 reversible connector',
          porturi: 'Fara Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Ion 4000 mAh battery',
          baterie: 4000
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 37,
  title: 'Xiaomi Redmi Note 8 Pro 64GB Dual SIM 4G Green',
  img: '../img_phones/xiaomi/id5/pic1.jpg',
  price:  1099,
  company: 'Xiaomi',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'HSDPA 850 / 900 / 1900 / 2100',
              retea_3g: `CDMA2000 1xEV-DO
                          HSDPA 850 / 900 / 1900 / 2100`,
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `Fast battery charging 18W
                      Front/back glass (Gorilla Glass 5)
                      Hybrid Dual SIM (Nano-SIM, dual stand-by)
                      UFS2.1`,
              culoare: 'Verde',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.53,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)',
              culori: '16M',
              tip_display: 'Touchscreen Capacitiv',
              tehnologie_display: 'IPS LCD capacitive touchscreen, 16M colors'
      },
      Dimensiuni: {
          dim_w_d_h_mm: '161.4 x 76.4 x 8.8mm',
          greutate_g: '200g'
      },
      Memorie: {
          slot_mem: 'microSD, up to 256 GB (uses shared SIM slot)',
          capacitate_gb: '64GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Mediatek Helio G90T (12nm)',
          cpu: 'Octa-core (2x2.05 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)',
          gpu: 'Mali-G76 MC4',
          frecv_proc_ghz: `2.0
                          2.05`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); MIUI 10',
          camera: `20 MP, f/2.0, 0.9µm`,
          functii: 'LED flash, HDR, panorama',
          senzor:	'Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass',
          audio: `Active noise cancellation with dedicated mic
                  Difuzoare`,
          camera_foto: `  2
                          64
                          8`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          nfc: 'Cu NFC',
          usb: '2.0, Type-C 1.0 reversible connector',
          porturi: 'Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS
                      NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 4500 mAh battery',
          baterie: 4500
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 38,
  title: 'Xiaomi Redmi Note 8 Pro 128GB Dual SIM 4G Green',
  img: '../img_phones/xiaomi/id6/pic1.jpg',
  price: 1199,
  company: 'Xiaomi',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'HSDPA 850 / 900 / 1900 / 2100',
              retea_3g: 'LTE band 1(2100), 3(1800), 5(850), 7(2600), 8(900), 40(2300), 41(2500)',
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `Fast battery charging 18W
                      Front/back glass (Gorilla Glass 5)
                      Hybrid Dual SIM (Nano-SIM, dual stand-by)
                      UFS2.1`,
              culoare: 'Verde',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.53,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)',
              culori: '16M',
              tip_display: 'Touchscreen Capacitiv',
              tehnologie_display: 'IPS LCD capacitive touchscreen, 16M colors',
              caracteristici: `500 nits max brightness 
                              Corning Gorilla Glass 5 
                              HDR`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '161.4 x 76.4 x 8.8mm',
          greutate_g: '200g'
      },
      Memorie: {
          slot_mem: 'microSD, up to 256 GB (uses shared SIM slot)',
          capacitate_gb: '128GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Mediatek Helio G90T (12nm)',
          cpu: 'Octa-core (2x2.05 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)',
          gpu: 'Mali-G76 MC4',
          frecv_proc_ghz: `2.0
                          2.05`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); MIUI 10',
          senzor:	`Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass`,	
          audio: `Active noise cancellation with dedicated mic
                  Difuzoare`,
          camera: '20 MP, f/2.0, 0.9µm',
          functii: `LED flash, HDR, panorama`,
          camera_foto: `2
                      64
                      8`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          nfc: 'Cu NFC',
          usb: '2.0, Type-C 1.0 reversible connector',
          porturi: 'Jack 3.5mm',
          tehnologie:	` 2G
                      3G
                      4G
                      GPS
                      NFC`,
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 4500 mAh battery',
          baterie: 4500
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 39,
  title: 'Xiaomi Redmi Note 8 Pro 128GB Dual SIM 4G Mineral Grey',
  img: '../img_phones/xiaomi/id7/pic1.jpg',
  price: 1199,
  company: 'Xiaomi',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'HSDPA 850 / 900 / 1900 / 2100',
              retea_3g: `LTE band 1(2100), 3(1800), 5(850), 7(2600), 8(900), 40(2300), 41(2500)`,
              gps: 'GPS',
              rezistenta: 'Apa',
              altele: `Fast battery charging 18W
                      Front/back glass (Gorilla Glass 5)
                      Hybrid Dual SIM (Nano-SIM, dual stand-by)
                      UFS2.1`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.53,
              rezolutie_px: '1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)',
              culori: '16M',
              tip_display: 'Touchscreen Capacitiv',
              tehnologie_display: 'IPS LCD capacitive touchscreen, 16M colors',
              caracteristici: `500 nits max brightness 
                              Corning Gorilla Glass 5 
                              HDR`
      },
      Dimensiuni: {
          dim_w_d_h_mm: '161.4 x 76.4 x 8.8mm',
          greutate_g: '200g'
      },
      Memorie: {
          slot_mem: 'microSD, up to 256 GB (uses shared SIM slot)',
          capacitate_gb: '128GB',
          mem_ram: '6GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Mediatek Helio G90T (12nm)',
          cpu: 'Octa-core (2x2.05 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)',
          gpu: 'Mali-G76 MC4',
          frecv_proc_ghz: ` 2.0
                          2.05`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); MIUI 10',
          camera: '20 MP, f/2.0, 0.9µm',
          senzor:	`Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass`,	
          audio: ` Active noise cancellation with dedicated mic
                  Difuzoare`,
          camera_foto: `2
                          64
                          8`,
          functii: `LED flash, HDR, panorama`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '5.0, A2DP, LE',
          wlan: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot',
          nfc: 'Cu NFC',
          usb: '2.0, Type-C 1.0 reversible connector',
          porturi: 'Jack 3.5mm',
          tehnologie:	` 2G
                          3G
                          4G
                          GPS
                          NFC`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 4500 mAh battery',
          Baterie: 4500
      }
  },
  inCart: false,
    inFavorites: false,
  count: 0,
  total: 0
},

{
  id: 40,
  title: 'Xiaomi Redmi 8 64GB Dual SIM 4G Onyx Black',
  img: '../img_phones/xiaomi/id8/pic1.jpg',
  price: 659,
  company: 'Xiaomi',
  info: {
      General: {
              dual_sim: 'Da',
              retea_2g: 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
              retea_3g: 'HSDPA 850 / 900 / 1900 / 2100',
              retea_4g: 'LTE band 1(2100), 3(1800), 5(850), 8(900), 40(2300), 41(2500)',
              gps: 'GPS',
              altele: `Dual SIM (Nano-SIM, dual stand-by)
                      Fast battery charging 18W
                      Splash resistant`,
              culoare: 'Negru',
              tip_telefon: 'Smartphone'
      },
      Display: {
              dim_display_inch: 6.22,
              rezolutie_px: '720 x 1520 pixels, 19:9 ratio (~270 ppi density)',
              culori: '16M',
              tip_display: 'Touchscreen Capacitiv',
              tehnologie_display: 'IPS LCD capacitive touchscreen, 16M colors',
              caracteristici: `Corning Gorilla Glass 5`,
      },
      Dimensiuni: {
          dim_w_d_h_mm: '156.5 x 75.4 x 9.4 mm',
          greutate_g: '188g'
      },
      Memorie: {
          slot_mem: 'microSD, up to 512 GB (dedicated slot)',
          capacitate_gb: '64GB',
          mem_ram: '4GB'
      },
      Procesor: {
          nr_nucleu_proc: 'Octa Core',
          chipset: 'Qualcomm SDM439 Snapdragon 439 (12 nm)',
          cpu: 'Octa-core (2x1.95 GHz Cortex-A53 & 6x1.45 GHz Cortex A53)',
          gpu: 'Adreno 505',
          frecv_proc_ghz: ` 1.45
                          1.95`
      },
      Functii: {
          so_tip: 'Android',
          so_versiune: 'Android 9.0 (Pie); MIUI 9',
          camera: '8 MP, f/2.0, 1.12µm',
          functii: 'LED flash, HDR, panorama',
          senzor:	`Fingerprint (rear-mounted), accelerometer, proximity, compass`,	
          audio: `Active noise cancellation with dedicated mic
                  Difuzoare`,
          camera_foto: `12
                      2`
      },
      Conectivitate: {
          tehnologie_wirless: 'Wi Fi',
          bluetooth: '4.2, A2DP, LE',
          wlan: 'Wi-Fi 802.11 b/g/n, Wi-Fi Direct, hotspot',
          nfc: 'Cu NFC',
          usb: '2.0, Type-C 1.0 reversible connector, USB On-The-Go',
          porturi: 'Jack 3.5mm',
          tehnologie:	`2G
                      3G
                      4G
                      GPS`
      },
      Baterie: {
          tip_baterie: 'Non-removable Li-Po 5000 mAh battery',
          baterie: 5000
      }
  },
  inCart: false,
   inFavorites: false,
  count: 0,
  total: 0
}
];

export const detailProduct = {
  id: 1,
  title: "Google Pixel - Black",
  img: "img/product-1.png",
  price: 10,
  company: "google",
  info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  inFavorites: false,
  count: 0,
  total: 0
};
