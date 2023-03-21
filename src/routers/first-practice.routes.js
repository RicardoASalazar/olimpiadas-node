const { Router } = require("express");
const { icosaedro,Sphere, Einstein1, Einstein2 } = require("../controllers/operations.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/operaciones/icosaedro:
 *   post:
 *     summary: Calcular el volumen de Icosaedro
 *     tags: [Operaciones]
 *     requestBody:
 *       description: Campos requeridos para calcular el volumen de un Icosaedro
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/icosaedro'
 *     responses:
 *       201:
 *         description: Succesful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 volumen:
 *                   type: float
 *                   example: 17.45
 *       400:
 *         description: validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /api/v1/operaciones/esfera:
 *   post:
 *     summary: Calcular el volumen de una esfera
 *     tags: [Operaciones]
 *     requestBody:
 *       description: Campos requeridos para calcular el volumen de una esfera
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/esfera'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
 *       400:
 *         description: validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /api/v1/operaciones/energia/gr:
 *   post:
 *     summary: Calcular la energia mediante la primera formula de enstein
 *     tags: [Operaciones]
 *     requestBody:
 *       description: Campos requeridos para calcular
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/energiagr'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
 *       400:
 *         description: validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /api/v1/operaciones/energia/kg:
 *   post:
 *     summary: Calcular el volumen de Icosaedro
 *     tags: [Operaciones]
 *     requestBody:
 *       description: Campos requeridos para calcular
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/energiakg'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
 *       400:
 *         description: validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 */

router.post("/icosaedro",icosaedro);
router.post('/esfera',Sphere)
router.post('/energia/gr',Einstein1)
router.post('/energia/kg',Einstein2)

module.exports = router;
