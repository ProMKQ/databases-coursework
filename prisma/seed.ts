import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
        data: [
            { id: '01aac9a4-9fa0-4259-9cb7-96ae04493c00', username: 'Alfreda.Kovacek', password: '2IeUPM2PuuxTSWr', email: 'Harry79@gmail.com', firstName: 'Uriel', lastName: 'Beier', avatar: 'https://avatars.githubusercontent.com/u/84658049', blocked: false },
            { id: 'ac271f82-76f6-4cde-be0b-5d22c05ef026', username: 'Bertha.Bogisich69', password: 'WtxUZUx7zlckhh_', email: 'Ezekiel_Pacocha25@yahoo.com', firstName: 'Kiley', lastName: 'Marvin', avatar: 'https://avatars.githubusercontent.com/u/92353484', blocked: false },
            { id: 'e2217349-7e03-46bd-a504-f1e2067cae6c', username: 'Eleonore.Kassulke40', password: 'JWalSbqVHoE1Ieg', email: 'Ceasar60@gmail.com', firstName: 'Paris', lastName: 'Leannon', avatar: 'https://avatars.githubusercontent.com/u/416693', blocked: false },
            { id: 'ed8b1607-6901-45f7-837c-51a5d838559c', username: 'Carolyn.Hagenes24', password: 'fIfystAB8TkB434', email: 'Cayla.Oberbrunner52@hotmail.com', firstName: 'Eloy', lastName: 'Stroman', avatar: 'https://avatars.githubusercontent.com/u/7719973', blocked: false },
            { id: 'ff3ea8d2-e289-4e51-a583-70e632b96543', username: 'Eloy.Mills14', password: '0al8wG4h2W57FDW', email: 'Ofelia_Gleichner@gmail.com', firstName: 'Constance', lastName: 'Bode', avatar: 'https://avatars.githubusercontent.com/u/4484700', blocked: false },
        ],
    });

    await prisma.project.createMany({
        data: [
            { id: '37385665-6efc-4880-8769-bae6df1fe3fc', status: 'active', name: 'custom', description: 'Amiculum sto culpa utrimque.' },
            { id: 'ebe00229-6821-45bc-8046-9c3706592dd4', status: 'active', name: 'hepatitis', description: 'Crinis arcus agnitio ater defleo votum aestivus cura.' },
        ],
    });

    await prisma.connectToProjectRequest.create({
        data: { id: '9543a4f0-8b16-456f-b1a5-221ab9489ea4', userId: 'ff3ea8d2-e289-4e51-a583-70e632b96543', projectId: 'ebe00229-6821-45bc-8046-9c3706592dd4' },
    });

    await prisma.projectMember.createMany({
        data: [
            { id: '0917dc05-f777-44e0-8c2e-699f69afe37e', projectId: '37385665-6efc-4880-8769-bae6df1fe3fc', userId: '01aac9a4-9fa0-4259-9cb7-96ae04493c00' },
            { id: '0adcac73-075e-4be9-881c-3663d365642c', projectId: 'ebe00229-6821-45bc-8046-9c3706592dd4', userId: 'e2217349-7e03-46bd-a504-f1e2067cae6c' },
            { id: '5b81c65a-91a6-47bf-b8be-bac234bc3fde', projectId: 'ebe00229-6821-45bc-8046-9c3706592dd4', userId: 'ed8b1607-6901-45f7-837c-51a5d838559c' },
            { id: '857761ed-8c62-4946-b24f-73aff9ff3c39', projectId: '37385665-6efc-4880-8769-bae6df1fe3fc', userId: 'ac271f82-76f6-4cde-be0b-5d22c05ef026' },
        ],
    });

    await prisma.task.createMany({
        data: [
            { id: '617cd0ac-ea33-4d10-8422-6080a9149ff0', name: 'vitae', description: 'Curriculum tabula subseco absum. Cervus trepide quaerat. Aeger cunctatio rerum arbustum.', status: 'todo', deadline: new Date('2024-08-14T02:23:34'), projectId: 'ebe00229-6821-45bc-8046-9c3706592dd4' },
            { id: '8a4cc33b-5ad9-4683-bfeb-1d66cbf4c6d4', name: 'cursus', description: 'Desidero considero cruciamentum coniuratio magnam vobis.', status: 'todo', deadline: new Date('2024-07-25T03:43:09'), projectId: '37385665-6efc-4880-8769-bae6df1fe3fc' },
            { id: '9df91dfc-8798-45fc-a79c-68ced190f6e1', name: 'canis', description: 'Certe cito viscus nesciunt casus dolores supellex cibus.', status: 'todo', deadline: new Date('2025-10-26T07:17:02'), projectId: '37385665-6efc-4880-8769-bae6df1fe3fc' },
            { id: 'b1e683ac-d4e9-45c6-a920-6ff6edf88a8e', name: 'cunabula', description: 'Talus pax sollicito summisse advoco claro adeptio.', status: 'todo', deadline: new Date('2025-02-08T01:29:55'), projectId: 'ebe00229-6821-45bc-8046-9c3706592dd4' },
        ],
    });

    await prisma.taskComment.createMany({
        data: [
            {id: '038147de-4fef-4b24-be8f-1a66c965cd83', text: 'Tempore vulticulus vis debitis enim utique carbo quisquam.', taskId: '9df91dfc-8798-45fc-a79c-68ced190f6e1', projectMemberId: '857761ed-8c62-4946-b24f-73aff9ff3c39',},
            {id: '62750d0b-dfd8-4ba2-967d-7c723450508b', text: 'Amoveo clamo tamdiu accusantium usque tamquam tergum.', taskId: '617cd0ac-ea33-4d10-8422-6080a9149ff0', projectMemberId: '0adcac73-075e-4be9-881c-3663d365642c',},
            {id: '90d3dc3b-2ea3-41d3-9fd5-b357208ebc21', text: 'Angulus cometes apparatus comminor inflammatio ter comitatus vinculum.', taskId: '9df91dfc-8798-45fc-a79c-68ced190f6e1', projectMemberId: '0917dc05-f777-44e0-8c2e-699f69afe37e',},
            {id: 'b7fe557e-d4f7-4bba-bbd4-f61c41663cbf', text: 'Ars delinquo ab. Statim vestigium aeger.', taskId: 'b1e683ac-d4e9-45c6-a920-6ff6edf88a8e', projectMemberId: '5b81c65a-91a6-47bf-b8be-bac234bc3fde',},
        ],
    });

    await prisma.assignment.createMany({
        data: [
            {id: '24ba8ad9-b269-4bcf-94a4-1dc832e8b061', taskId: 'b1e683ac-d4e9-45c6-a920-6ff6edf88a8e', projectMemberId: '0adcac73-075e-4be9-881c-3663d365642c',},
            {id: '2a173791-18b7-42c5-a4be-c25671a53092', taskId: '9df91dfc-8798-45fc-a79c-68ced190f6e1', projectMemberId: '0917dc05-f777-44e0-8c2e-699f69afe37e',},
            {id: '4330d27b-1297-407f-a6e5-7efcea73c4e0', taskId: '9df91dfc-8798-45fc-a79c-68ced190f6e1', projectMemberId: '857761ed-8c62-4946-b24f-73aff9ff3c39',},
            {id: 'c0597b8c-21af-412d-8fa9-90cf9c03e044', taskId: '8a4cc33b-5ad9-4683-bfeb-1d66cbf4c6d4', projectMemberId: '5b81c65a-91a6-47bf-b8be-bac234bc3fde',},
        ],
    });

    await prisma.role.createMany({
        data: [
            { id: '0ac0e86e-3178-42e4-b624-875afa7328ac', name: 'member', projectId: '37385665-6efc-4880-8769-bae6df1fe3fc' },
            { id: '5aefca52-a8c7-4150-b72a-96c248758784', name: 'manager', projectId: 'ebe00229-6821-45bc-8046-9c3706592dd4' },
            { id: '9a108f4a-38ea-422c-8f51-3bbe9acc62ae', name: 'admin', projectId: '37385665-6efc-4880-8769-bae6df1fe3fc' },
            { id: 'a69443b7-c68c-4e0e-908f-d66170cdede7', name: 'member', projectId: '37385665-6efc-4880-8769-bae6df1fe3fc' },
            { id: 'abcf3f91-1bb3-429d-a816-d1b1d04a14b6', name: 'manager', projectId: 'ebe00229-6821-45bc-8046-9c3706592dd4' },
            { id: 'e8bc20c7-c479-43cc-afe3-e67c4deff572', name: 'admin', projectId: 'ebe00229-6821-45bc-8046-9c3706592dd4' },
        ],
    });

    await prisma.grant.createMany({
        data: [
            { id: '09adb965-1282-4e7b-bcc9-93e3db0ea6b0', permission: 'read', roleId: 'a69443b7-c68c-4e0e-908f-d66170cdede7' },
            { id: '30c3e00c-4346-4c87-bae6-68c0129cbc71', permission: 'create', roleId: '9a108f4a-38ea-422c-8f51-3bbe9acc62ae' },
            { id: 'ab005d0f-bc4a-49d9-bc62-d9aae977377a', permission: 'delete', roleId: '0ac0e86e-3178-42e4-b624-875afa7328ac' },
            { id: 'b014f61d-c834-4c63-80f7-701decfedeb8', permission: 'read', roleId: 'e8bc20c7-c479-43cc-afe3-e67c4deff572' },
            { id: 'caae45a4-8328-463f-ade0-28c83ddc75cc', permission: 'create', roleId: 'abcf3f91-1bb3-429d-a816-d1b1d04a14b6' },
            { id: 'cd89a1a8-d581-4dc4-a314-1f0766618d22', permission: 'delete', roleId: '5aefca52-a8c7-4150-b72a-96c248758784' },
        ],
    });

    await prisma.projectMemberRole.createMany({
        data: [
            { id: '369ec90f-2ff4-4279-a09b-b536cc9ead4d', roleId: 'a69443b7-c68c-4e0e-908f-d66170cdede7', projectMemberId: '5b81c65a-91a6-47bf-b8be-bac234bc3fde' },
            { id: 'a07920d3-e3fc-496b-8492-cabff398936f', roleId: '5aefca52-a8c7-4150-b72a-96c248758784', projectMemberId: '0adcac73-075e-4be9-881c-3663d365642c' },
            { id: 'b7a74192-e1e7-4839-9a15-c01b6bea2d5a', roleId: '0ac0e86e-3178-42e4-b624-875afa7328ac', projectMemberId: '857761ed-8c62-4946-b24f-73aff9ff3c39' },
            { id: 'd9755074-2734-486c-a2a6-51aa2415ed6d', roleId: '0ac0e86e-3178-42e4-b624-875afa7328ac', projectMemberId: '0917dc05-f777-44e0-8c2e-699f69afe37e' },
            { id: 'e28fa866-d9cc-408e-aa29-fc6c1dc0f817', roleId: 'a69443b7-c68c-4e0e-908f-d66170cdede7', projectMemberId: '0adcac73-075e-4be9-881c-3663d365642c' },
            { id: 'ef17e2ce-9c9b-47a8-badc-4231e7c5c51c', roleId: '9a108f4a-38ea-422c-8f51-3bbe9acc62ae', projectMemberId: '0917dc05-f777-44e0-8c2e-699f69afe37e' },
        ],
    });

    await prisma.supportRequest.createMany({
        data: [
            {id: '4fbe4541-9235-4e80-a9c9-9fd1d3117267', userId: 'ac271f82-76f6-4cde-be0b-5d22c05ef026', topic: 'accelerator', description: 'Inventore vapulus beatus tertius sono cerno. Titulus alienus coaegresco velit cunctatio corrumpo. Ulterius amoveo vaco adfero cribro torrens.',},
            {id: '5deddba6-2073-494b-af56-9a14f3847888', userId: 'ed8b1607-6901-45f7-837c-51a5d838559c', topic: 'coil', description: 'Umbra vesica arbor turbo centum cubitum caput mollitia spero. Vel via delibero autem decimus denuo. Taedium aggero sumptus commodo usque tabella.',},
            {id: 'dfbf873b-de0d-493f-87dc-4ef53ecfd7ce', userId: '01aac9a4-9fa0-4259-9cb7-96ae04493c00', topic: 'stock', description: 'Exercitationem asper repellendus curo cursim. Subnecto aeger vae acidus beneficium. Vae aut quod.',},
        ],
    });

    await prisma.supportRequestAnswer.createMany({
        data: [
            {id: 'e29bce8b-e012-4b78-a552-9b547a4d275b', feedback: 'Admitto fugit condico caritas exercitationem apud eligendi quo desipio caterva. Accendo aurum impedit. Quo verbera subnecto a deficio. Verbum textilis concedo viduo. Supellex cerno tollo aperiam amor vinum.', supportRequestId: '4fbe4541-9235-4e80-a9c9-9fd1d3117267',},
            {id: 'eaef85fe-6d41-4ad3-a874-0df59cf9f697', feedback: 'Vulgaris claudeo depereo incidunt. Antiquus aeternus depopulo civis coerceo considero atqui exercitationem conculco sum. Annus aureus voro nisi tenetur. Vado decipio vinum viriliter veritatis adinventitias aspicio via nulla.', supportRequestId: 'dfbf873b-de0d-493f-87dc-4ef53ecfd7ce',},
        ],
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
