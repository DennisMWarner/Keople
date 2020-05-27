using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    public VaultKeepsService(VaultKeepsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<VaultKeep> Get()
    {
      return _repo.Get();
    }

    public VaultKeep Create(VaultKeep newVaultKeep)
    {
      return _repo.Create(newVaultKeep);
    }

    internal VaultKeep GetVaultKeepById(int id)
    {
      VaultKeep foundVaultKeep = _repo.GetVaultKeepById(id);
      if (foundVaultKeep == null)
      {
        throw new Exception("Invalid VaultKeep Id");
      }
      return foundVaultKeep;
    }
  }
}