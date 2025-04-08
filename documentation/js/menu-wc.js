'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-basic-hoidanit documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d1760b697c3cd19bf021bdc62a1069635e47a413974894aa76afed295233ce80dcdfaa3b735126e0a293e335b2893f48af8759c3968fc2fa5ce63b12d681497e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d1760b697c3cd19bf021bdc62a1069635e47a413974894aa76afed295233ce80dcdfaa3b735126e0a293e335b2893f48af8759c3968fc2fa5ce63b12d681497e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d1760b697c3cd19bf021bdc62a1069635e47a413974894aa76afed295233ce80dcdfaa3b735126e0a293e335b2893f48af8759c3968fc2fa5ce63b12d681497e"' :
                                            'id="xs-controllers-links-module-AppModule-d1760b697c3cd19bf021bdc62a1069635e47a413974894aa76afed295233ce80dcdfaa3b735126e0a293e335b2893f48af8759c3968fc2fa5ce63b12d681497e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d1760b697c3cd19bf021bdc62a1069635e47a413974894aa76afed295233ce80dcdfaa3b735126e0a293e335b2893f48af8759c3968fc2fa5ce63b12d681497e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d1760b697c3cd19bf021bdc62a1069635e47a413974894aa76afed295233ce80dcdfaa3b735126e0a293e335b2893f48af8759c3968fc2fa5ce63b12d681497e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d1760b697c3cd19bf021bdc62a1069635e47a413974894aa76afed295233ce80dcdfaa3b735126e0a293e335b2893f48af8759c3968fc2fa5ce63b12d681497e"' :
                                        'id="xs-injectables-links-module-AppModule-d1760b697c3cd19bf021bdc62a1069635e47a413974894aa76afed295233ce80dcdfaa3b735126e0a293e335b2893f48af8759c3968fc2fa5ce63b12d681497e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-ed435d1a96f19ea760a673454de410d78868a961c144c160117221450b17b4d1d8f7a6e7bcf705a691eb6dfb2d5ef663526babc509d8dc52d4fa67554aaee718"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-ed435d1a96f19ea760a673454de410d78868a961c144c160117221450b17b4d1d8f7a6e7bcf705a691eb6dfb2d5ef663526babc509d8dc52d4fa67554aaee718"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-ed435d1a96f19ea760a673454de410d78868a961c144c160117221450b17b4d1d8f7a6e7bcf705a691eb6dfb2d5ef663526babc509d8dc52d4fa67554aaee718"' :
                                            'id="xs-controllers-links-module-AuthModule-ed435d1a96f19ea760a673454de410d78868a961c144c160117221450b17b4d1d8f7a6e7bcf705a691eb6dfb2d5ef663526babc509d8dc52d4fa67554aaee718"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-ed435d1a96f19ea760a673454de410d78868a961c144c160117221450b17b4d1d8f7a6e7bcf705a691eb6dfb2d5ef663526babc509d8dc52d4fa67554aaee718"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-ed435d1a96f19ea760a673454de410d78868a961c144c160117221450b17b4d1d8f7a6e7bcf705a691eb6dfb2d5ef663526babc509d8dc52d4fa67554aaee718"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-ed435d1a96f19ea760a673454de410d78868a961c144c160117221450b17b4d1d8f7a6e7bcf705a691eb6dfb2d5ef663526babc509d8dc52d4fa67554aaee718"' :
                                        'id="xs-injectables-links-module-AuthModule-ed435d1a96f19ea760a673454de410d78868a961c144c160117221450b17b4d1d8f7a6e7bcf705a691eb6dfb2d5ef663526babc509d8dc52d4fa67554aaee718"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"' :
                                            'id="xs-controllers-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"' :
                                        'id="xs-injectables-links-module-CompaniesModule-a90a238c9fb25a25b0063ea0d32e7594878ecc90d5939979d42465d2fa7ee1cc6c2c1555b610a3a1065b94c5d10d34b885bdfc12165b5392e0dea50fe9007c6c"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-e75cdac2ca265a469bb937641e7ee34bfa52704d72f0b0ea5328036786fa8988b113067ff68ad91e9ed629d4bac962ed431174182b62fd97dba690530c2cf0eb"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-e75cdac2ca265a469bb937641e7ee34bfa52704d72f0b0ea5328036786fa8988b113067ff68ad91e9ed629d4bac962ed431174182b62fd97dba690530c2cf0eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-e75cdac2ca265a469bb937641e7ee34bfa52704d72f0b0ea5328036786fa8988b113067ff68ad91e9ed629d4bac962ed431174182b62fd97dba690530c2cf0eb"' :
                                            'id="xs-controllers-links-module-DatabasesModule-e75cdac2ca265a469bb937641e7ee34bfa52704d72f0b0ea5328036786fa8988b113067ff68ad91e9ed629d4bac962ed431174182b62fd97dba690530c2cf0eb"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-e75cdac2ca265a469bb937641e7ee34bfa52704d72f0b0ea5328036786fa8988b113067ff68ad91e9ed629d4bac962ed431174182b62fd97dba690530c2cf0eb"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-e75cdac2ca265a469bb937641e7ee34bfa52704d72f0b0ea5328036786fa8988b113067ff68ad91e9ed629d4bac962ed431174182b62fd97dba690530c2cf0eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-e75cdac2ca265a469bb937641e7ee34bfa52704d72f0b0ea5328036786fa8988b113067ff68ad91e9ed629d4bac962ed431174182b62fd97dba690530c2cf0eb"' :
                                        'id="xs-injectables-links-module-DatabasesModule-e75cdac2ca265a469bb937641e7ee34bfa52704d72f0b0ea5328036786fa8988b113067ff68ad91e9ed629d4bac962ed431174182b62fd97dba690530c2cf0eb"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-d06c5387aa686fa9b8a855e286d6e7a2f9cac9d5c78b19c0fabb4a1eae1373c7624ea217839bebf556e6fe98e8bb9d6f91e9b87e33f723cca3ebf03c1538f3d7"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-d06c5387aa686fa9b8a855e286d6e7a2f9cac9d5c78b19c0fabb4a1eae1373c7624ea217839bebf556e6fe98e8bb9d6f91e9b87e33f723cca3ebf03c1538f3d7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-d06c5387aa686fa9b8a855e286d6e7a2f9cac9d5c78b19c0fabb4a1eae1373c7624ea217839bebf556e6fe98e8bb9d6f91e9b87e33f723cca3ebf03c1538f3d7"' :
                                            'id="xs-controllers-links-module-FilesModule-d06c5387aa686fa9b8a855e286d6e7a2f9cac9d5c78b19c0fabb4a1eae1373c7624ea217839bebf556e6fe98e8bb9d6f91e9b87e33f723cca3ebf03c1538f3d7"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-d06c5387aa686fa9b8a855e286d6e7a2f9cac9d5c78b19c0fabb4a1eae1373c7624ea217839bebf556e6fe98e8bb9d6f91e9b87e33f723cca3ebf03c1538f3d7"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-d06c5387aa686fa9b8a855e286d6e7a2f9cac9d5c78b19c0fabb4a1eae1373c7624ea217839bebf556e6fe98e8bb9d6f91e9b87e33f723cca3ebf03c1538f3d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-d06c5387aa686fa9b8a855e286d6e7a2f9cac9d5c78b19c0fabb4a1eae1373c7624ea217839bebf556e6fe98e8bb9d6f91e9b87e33f723cca3ebf03c1538f3d7"' :
                                        'id="xs-injectables-links-module-FilesModule-d06c5387aa686fa9b8a855e286d6e7a2f9cac9d5c78b19c0fabb4a1eae1373c7624ea217839bebf556e6fe98e8bb9d6f91e9b87e33f723cca3ebf03c1538f3d7"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' :
                                            'id="xs-controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-a612c6affd1bdbc07f9ceba706825189b745e76261e028ee89fa7831f9c3c3a3c7bdd8afccb44b6a889abe784d54d3bd064892e57f940f1329c1a7fcf373f55b"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-a612c6affd1bdbc07f9ceba706825189b745e76261e028ee89fa7831f9c3c3a3c7bdd8afccb44b6a889abe784d54d3bd064892e57f940f1329c1a7fcf373f55b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-a612c6affd1bdbc07f9ceba706825189b745e76261e028ee89fa7831f9c3c3a3c7bdd8afccb44b6a889abe784d54d3bd064892e57f940f1329c1a7fcf373f55b"' :
                                            'id="xs-controllers-links-module-JobsModule-a612c6affd1bdbc07f9ceba706825189b745e76261e028ee89fa7831f9c3c3a3c7bdd8afccb44b6a889abe784d54d3bd064892e57f940f1329c1a7fcf373f55b"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-a612c6affd1bdbc07f9ceba706825189b745e76261e028ee89fa7831f9c3c3a3c7bdd8afccb44b6a889abe784d54d3bd064892e57f940f1329c1a7fcf373f55b"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-a612c6affd1bdbc07f9ceba706825189b745e76261e028ee89fa7831f9c3c3a3c7bdd8afccb44b6a889abe784d54d3bd064892e57f940f1329c1a7fcf373f55b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-a612c6affd1bdbc07f9ceba706825189b745e76261e028ee89fa7831f9c3c3a3c7bdd8afccb44b6a889abe784d54d3bd064892e57f940f1329c1a7fcf373f55b"' :
                                        'id="xs-injectables-links-module-JobsModule-a612c6affd1bdbc07f9ceba706825189b745e76261e028ee89fa7831f9c3c3a3c7bdd8afccb44b6a889abe784d54d3bd064892e57f940f1329c1a7fcf373f55b"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-13f20dee550c7b38c631076c39ee0b9f92bf93ae937bece855849c9aedc43769c1fc8eb748afcdcac2249900e7ba205e1c6668672a2e0121cb3b3947c61653a6"' : 'data-bs-target="#xs-controllers-links-module-MailModule-13f20dee550c7b38c631076c39ee0b9f92bf93ae937bece855849c9aedc43769c1fc8eb748afcdcac2249900e7ba205e1c6668672a2e0121cb3b3947c61653a6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-13f20dee550c7b38c631076c39ee0b9f92bf93ae937bece855849c9aedc43769c1fc8eb748afcdcac2249900e7ba205e1c6668672a2e0121cb3b3947c61653a6"' :
                                            'id="xs-controllers-links-module-MailModule-13f20dee550c7b38c631076c39ee0b9f92bf93ae937bece855849c9aedc43769c1fc8eb748afcdcac2249900e7ba205e1c6668672a2e0121cb3b3947c61653a6"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-13f20dee550c7b38c631076c39ee0b9f92bf93ae937bece855849c9aedc43769c1fc8eb748afcdcac2249900e7ba205e1c6668672a2e0121cb3b3947c61653a6"' : 'data-bs-target="#xs-injectables-links-module-MailModule-13f20dee550c7b38c631076c39ee0b9f92bf93ae937bece855849c9aedc43769c1fc8eb748afcdcac2249900e7ba205e1c6668672a2e0121cb3b3947c61653a6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-13f20dee550c7b38c631076c39ee0b9f92bf93ae937bece855849c9aedc43769c1fc8eb748afcdcac2249900e7ba205e1c6668672a2e0121cb3b3947c61653a6"' :
                                        'id="xs-injectables-links-module-MailModule-13f20dee550c7b38c631076c39ee0b9f92bf93ae937bece855849c9aedc43769c1fc8eb748afcdcac2249900e7ba205e1c6668672a2e0121cb3b3947c61653a6"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-153689c081d215a67d58b534cc742173ff6f967a002c3c91e380b03fe56571903c1442d4a9e848890995e47e8ae03277489fd7a07f3fa70ffa282a832d20ec82"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-153689c081d215a67d58b534cc742173ff6f967a002c3c91e380b03fe56571903c1442d4a9e848890995e47e8ae03277489fd7a07f3fa70ffa282a832d20ec82"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-153689c081d215a67d58b534cc742173ff6f967a002c3c91e380b03fe56571903c1442d4a9e848890995e47e8ae03277489fd7a07f3fa70ffa282a832d20ec82"' :
                                            'id="xs-controllers-links-module-PermissionsModule-153689c081d215a67d58b534cc742173ff6f967a002c3c91e380b03fe56571903c1442d4a9e848890995e47e8ae03277489fd7a07f3fa70ffa282a832d20ec82"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-153689c081d215a67d58b534cc742173ff6f967a002c3c91e380b03fe56571903c1442d4a9e848890995e47e8ae03277489fd7a07f3fa70ffa282a832d20ec82"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-153689c081d215a67d58b534cc742173ff6f967a002c3c91e380b03fe56571903c1442d4a9e848890995e47e8ae03277489fd7a07f3fa70ffa282a832d20ec82"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-153689c081d215a67d58b534cc742173ff6f967a002c3c91e380b03fe56571903c1442d4a9e848890995e47e8ae03277489fd7a07f3fa70ffa282a832d20ec82"' :
                                        'id="xs-injectables-links-module-PermissionsModule-153689c081d215a67d58b534cc742173ff6f967a002c3c91e380b03fe56571903c1442d4a9e848890995e47e8ae03277489fd7a07f3fa70ffa282a832d20ec82"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-52d9eb23afbf3bf05c69026d9d01a2470bcfee189ec42a3352828da86a88c78a09f35296c67afd49b8c98ad3fb8adbea673e2cc01f8c3e40e8f4b40f7a7e903f"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-52d9eb23afbf3bf05c69026d9d01a2470bcfee189ec42a3352828da86a88c78a09f35296c67afd49b8c98ad3fb8adbea673e2cc01f8c3e40e8f4b40f7a7e903f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-52d9eb23afbf3bf05c69026d9d01a2470bcfee189ec42a3352828da86a88c78a09f35296c67afd49b8c98ad3fb8adbea673e2cc01f8c3e40e8f4b40f7a7e903f"' :
                                            'id="xs-controllers-links-module-ResumesModule-52d9eb23afbf3bf05c69026d9d01a2470bcfee189ec42a3352828da86a88c78a09f35296c67afd49b8c98ad3fb8adbea673e2cc01f8c3e40e8f4b40f7a7e903f"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-52d9eb23afbf3bf05c69026d9d01a2470bcfee189ec42a3352828da86a88c78a09f35296c67afd49b8c98ad3fb8adbea673e2cc01f8c3e40e8f4b40f7a7e903f"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-52d9eb23afbf3bf05c69026d9d01a2470bcfee189ec42a3352828da86a88c78a09f35296c67afd49b8c98ad3fb8adbea673e2cc01f8c3e40e8f4b40f7a7e903f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-52d9eb23afbf3bf05c69026d9d01a2470bcfee189ec42a3352828da86a88c78a09f35296c67afd49b8c98ad3fb8adbea673e2cc01f8c3e40e8f4b40f7a7e903f"' :
                                        'id="xs-injectables-links-module-ResumesModule-52d9eb23afbf3bf05c69026d9d01a2470bcfee189ec42a3352828da86a88c78a09f35296c67afd49b8c98ad3fb8adbea673e2cc01f8c3e40e8f4b40f7a7e903f"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-5462bae5b86c00c96034756095afac9f8900abc8073be3513f6c032985a710616f6fb6c9c0f15836ecb7731d792fbe56bd3f7fa06d9df5a12dc8976c74db1949"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-5462bae5b86c00c96034756095afac9f8900abc8073be3513f6c032985a710616f6fb6c9c0f15836ecb7731d792fbe56bd3f7fa06d9df5a12dc8976c74db1949"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-5462bae5b86c00c96034756095afac9f8900abc8073be3513f6c032985a710616f6fb6c9c0f15836ecb7731d792fbe56bd3f7fa06d9df5a12dc8976c74db1949"' :
                                            'id="xs-controllers-links-module-RolesModule-5462bae5b86c00c96034756095afac9f8900abc8073be3513f6c032985a710616f6fb6c9c0f15836ecb7731d792fbe56bd3f7fa06d9df5a12dc8976c74db1949"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-5462bae5b86c00c96034756095afac9f8900abc8073be3513f6c032985a710616f6fb6c9c0f15836ecb7731d792fbe56bd3f7fa06d9df5a12dc8976c74db1949"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-5462bae5b86c00c96034756095afac9f8900abc8073be3513f6c032985a710616f6fb6c9c0f15836ecb7731d792fbe56bd3f7fa06d9df5a12dc8976c74db1949"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-5462bae5b86c00c96034756095afac9f8900abc8073be3513f6c032985a710616f6fb6c9c0f15836ecb7731d792fbe56bd3f7fa06d9df5a12dc8976c74db1949"' :
                                        'id="xs-injectables-links-module-RolesModule-5462bae5b86c00c96034756095afac9f8900abc8073be3513f6c032985a710616f6fb6c9c0f15836ecb7731d792fbe56bd3f7fa06d9df5a12dc8976c74db1949"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-28b2d43507d2ad87a2ebfe0f926d5a9a478aa88cb5bdf6b6598d0512b8d3ae450b22b1ff126e4dd0d8be57d90cbe3aa4e13a3e1d2e456643436fd089decba14f"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-28b2d43507d2ad87a2ebfe0f926d5a9a478aa88cb5bdf6b6598d0512b8d3ae450b22b1ff126e4dd0d8be57d90cbe3aa4e13a3e1d2e456643436fd089decba14f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-28b2d43507d2ad87a2ebfe0f926d5a9a478aa88cb5bdf6b6598d0512b8d3ae450b22b1ff126e4dd0d8be57d90cbe3aa4e13a3e1d2e456643436fd089decba14f"' :
                                            'id="xs-controllers-links-module-SubscribersModule-28b2d43507d2ad87a2ebfe0f926d5a9a478aa88cb5bdf6b6598d0512b8d3ae450b22b1ff126e4dd0d8be57d90cbe3aa4e13a3e1d2e456643436fd089decba14f"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-28b2d43507d2ad87a2ebfe0f926d5a9a478aa88cb5bdf6b6598d0512b8d3ae450b22b1ff126e4dd0d8be57d90cbe3aa4e13a3e1d2e456643436fd089decba14f"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-28b2d43507d2ad87a2ebfe0f926d5a9a478aa88cb5bdf6b6598d0512b8d3ae450b22b1ff126e4dd0d8be57d90cbe3aa4e13a3e1d2e456643436fd089decba14f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-28b2d43507d2ad87a2ebfe0f926d5a9a478aa88cb5bdf6b6598d0512b8d3ae450b22b1ff126e4dd0d8be57d90cbe3aa4e13a3e1d2e456643436fd089decba14f"' :
                                        'id="xs-injectables-links-module-SubscribersModule-28b2d43507d2ad87a2ebfe0f926d5a9a478aa88cb5bdf6b6598d0512b8d3ae450b22b1ff126e4dd0d8be57d90cbe3aa4e13a3e1d2e456643436fd089decba14f"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-424633d3c2d23d863e47dc3e289bac2334e6266ead0c66759ab997c270a8ef2d26c1bd6e94751d97bc7203a56a113b3799734f6a23cd457f3f69f15799b25de5"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-424633d3c2d23d863e47dc3e289bac2334e6266ead0c66759ab997c270a8ef2d26c1bd6e94751d97bc7203a56a113b3799734f6a23cd457f3f69f15799b25de5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-424633d3c2d23d863e47dc3e289bac2334e6266ead0c66759ab997c270a8ef2d26c1bd6e94751d97bc7203a56a113b3799734f6a23cd457f3f69f15799b25de5"' :
                                            'id="xs-controllers-links-module-UsersModule-424633d3c2d23d863e47dc3e289bac2334e6266ead0c66759ab997c270a8ef2d26c1bd6e94751d97bc7203a56a113b3799734f6a23cd457f3f69f15799b25de5"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-424633d3c2d23d863e47dc3e289bac2334e6266ead0c66759ab997c270a8ef2d26c1bd6e94751d97bc7203a56a113b3799734f6a23cd457f3f69f15799b25de5"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-424633d3c2d23d863e47dc3e289bac2334e6266ead0c66759ab997c270a8ef2d26c1bd6e94751d97bc7203a56a113b3799734f6a23cd457f3f69f15799b25de5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-424633d3c2d23d863e47dc3e289bac2334e6266ead0c66759ab997c270a8ef2d26c1bd6e94751d97bc7203a56a113b3799734f6a23cd457f3f69f15799b25de5"' :
                                        'id="xs-injectables-links-module-UsersModule-424633d3c2d23d863e47dc3e289bac2334e6266ead0c66759ab997c270a8ef2d26c1bd6e94751d97bc7203a56a113b3799734f6a23cd457f3f69f15799b25de5"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-2.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeCvDto.html" data-type="entity-link" >CreateResumeCvDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/History.html" data-type="entity-link" >History</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShowUserDto.html" data-type="entity-link" >ShowUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBy.html" data-type="entity-link" >UpdateBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/TestGuard.html" data-type="entity-link" >TestGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});