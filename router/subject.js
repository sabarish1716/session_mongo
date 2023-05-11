const express = require('express')
const router = express.Router()
const subjectService = require('../service/subject')

router.post('/create',async (req,res)=>{
    await subjectService.subjectCreate(req,res).then().catch(e=>res.send(e))
})

router.get('/get',async (req,res)=>{
    await subjectService.getAllSubject(req,res).then().catch(e=>res.send(e))
})

router.get('/get/:id',async (req,res)=>{
    await subjectService.getSubjectById(req,res).then().catch(e=>res.send(e))
})

router.put('/update/:id',async (req,res)=>{
    await subjectService.updateSubjectById(req,res).then().catch(e=>res.send(e))
})

router.delete('/delete/:id',async (req,res)=>{
    await subjectService.deleteSubjectById(req,res).then().catch(e=>res.send(e))
})
module.exports = router